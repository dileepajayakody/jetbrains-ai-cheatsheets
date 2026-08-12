import '../env.js'; // load tooling/.env (harmless for crawl; keeps entrypoints uniform)
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium, type Browser, type Page } from 'playwright';
import TurndownService from 'turndown';
import { getProduct, products, type ProductConfig } from '../config/products.js';
import { CRAWL_DIR } from '../paths.js';

/**
 * Keyless docs crawler built on Playwright. JetBrains docs are Writerside sites:
 * junie.jetbrains.com is server-rendered, but www.jetbrains.com/help/* render
 * content client-side, so a real browser is required (no API key, unlike
 * Firecrawl). Writes one markdown file per page to `crawled-docs/<id>/`.
 */

const MAX_PAGES = 60;
const NAV_TIMEOUT_MS = 45_000;
const SETTLE_MS = 1500; // let the Writerside app paint after networkidle

// Politeness + resilience: junie.jetbrains.com returns transient 5xx
// ("temporary error, try again in 30 seconds") under rapid back-to-back
// requests, so we retry with backoff and pace requests.
const MAX_RETRIES = 3; // total attempts per page = MAX_RETRIES
const RETRY_BASE_MS = 2500; // backoff = RETRY_BASE_MS * 2^attempt (+ jitter)
const REQUEST_DELAY_MS = 800; // base pause between page loads (+ jitter)
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

/** Sleep helper with a bit of jitter to avoid a lockstep request cadence. */
function sleep(ms: number): Promise<void> {
  const jitter = Math.floor(Math.random() * 400);
  return new Promise((r) => setTimeout(r, ms + jitter));
}

/**
 * Soft-error detection: some Writerside error responses come back as 200 with a
 * short "Server Error / temporary error" body. Treat those as failures too so
 * they never overwrite a good committed snapshot.
 */
function looksLikeError(markdown: string): boolean {
  if (markdown.length > 400) return false;
  return /server error|temporary error|could not complete your request|try again in \d+ seconds/i.test(
    markdown,
  );
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

/** Turn an `includePaths` glob (`/docs/junie-*`) into a path matcher. */
function pathMatcher(patterns: string[]): (pathname: string) => boolean {
  const regexes = patterns.map((p) => {
    const escaped = p.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
    return new RegExp(`^${escaped}`);
  });
  return (pathname) => regexes.some((re) => re.test(pathname));
}

/** Turn a source URL into a safe, stable markdown filename. */
function fileNameFor(url: string): string {
  const slug = url
    .replace(/^https?:\/\//, '')
    .replace(/[#?].*$/, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return `${slug || 'index'}.md`;
}

/** Strip hash + query so the same page isn't visited twice. */
function canonical(url: string): string {
  const u = new URL(url);
  u.hash = '';
  u.search = '';
  if (u.pathname.length > 1) u.pathname = u.pathname.replace(/\/+$/, '');
  return u.toString();
}

interface PageResult {
  contentHtml: string;
  links: string[];
}

/** Does the extracted content look like a server-error page (even on HTTP 200)? */
function contentIsError(contentHtml: string): boolean {
  const text = contentHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return looksLikeError(text);
}

/**
 * One load attempt. Throws on nav failure, an HTTP >= 400 status, or a soft
 * server-error body — so the retry wrapper can back off and try again.
 */
async function loadPageOnce(page: Page, url: string): Promise<PageResult> {
  let response;
  try {
    response = await page.goto(url, { waitUntil: 'networkidle', timeout: NAV_TIMEOUT_MS });
  } catch {
    // networkidle can stall on long-polling apps; fall back to DOM ready.
    response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
  }

  const status = response?.status() ?? 0;
  if (!response || status >= 400) {
    throw new Error(`HTTP ${status || 'no-response'}`);
  }

  await page.waitForSelector('article', { timeout: 8000 }).catch(() => undefined);
  await page.waitForTimeout(SETTLE_MS);

  const result = await page.evaluate(() => {
    const node =
      document.querySelector('article') ??
      document.querySelector('main') ??
      document.body;
    const links = Array.from(document.querySelectorAll('a[href]'))
      .map((a) => (a as HTMLAnchorElement).href)
      .filter(Boolean);
    if (!node) return { contentHtml: '', links };
    node
      .querySelectorAll('script, style, noscript, nav, aside, header, footer, form')
      .forEach((el) => el.remove());
    return { contentHtml: node.innerHTML, links };
  });

  if (contentIsError(result.contentHtml)) {
    throw new Error('soft server-error body');
  }
  return result;
}

/**
 * Render a page with retries + exponential backoff. Returns null only after all
 * attempts fail, so the caller can keep the last committed snapshot untouched.
 */
async function loadPage(page: Page, url: string): Promise<PageResult | null> {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      const backoff = RETRY_BASE_MS * 2 ** (attempt - 1);
      console.warn(`    retry ${attempt}/${MAX_RETRIES - 1} for ${url} in ${backoff}ms`);
      await sleep(backoff);
    }
    try {
      return await loadPageOnce(page, url);
    } catch (err) {
      if (attempt === MAX_RETRIES - 1) {
        console.warn(`    load failed ${url}: ${(err as Error).message}`);
        return null;
      }
    }
  }
  return null;
}

/**
 * Crawl a product's docs and write markdown to `crawled-docs/<product>/`.
 * Per-page failures are logged and skipped; throws only if nothing was written
 * so the orchestrator can fall back to the last committed snapshot.
 */
export async function crawl(product: ProductConfig): Promise<number> {
  const outDir = resolve(CRAWL_DIR, product.id);
  await mkdir(outDir, { recursive: true });

  const matchesInclude = pathMatcher(product.includePaths);
  const seeds = product.crawlSeeds.map(canonical);
  const allowedHosts = new Set(seeds.map((s) => new URL(s).host));

  const queue: string[] = [...seeds];
  const visited = new Set<string>(seeds);
  let written = 0;
  const failed: string[] = []; // pages we could not load — their snapshots are kept

  let browser: Browser | undefined;
  try {
    browser = await chromium.launch();
    const context = await browser.newContext({
      userAgent: USER_AGENT,
      extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
    });
    const page = await context.newPage();

    let first = true;
    while (queue.length > 0 && written < MAX_PAGES) {
      const url = queue.shift() as string;
      // Pace requests to avoid tripping the docs host's rate limiter.
      if (!first) await sleep(REQUEST_DELAY_MS);
      first = false;

      const result = await loadPage(page, url);
      if (!result) {
        // Failed after retries — leave any committed snapshot untouched.
        failed.push(url);
        continue;
      }

      const markdown = turndown
        .turndown(result.contentHtml)
        .replace(/﻿/g, '') // Writerside feedback anchor char
        .replace(/\[\]\([^)]*\)/g, '') // empty-text heading anchor links
        .replace(/[ \t]+$/gm, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
      if (markdown && !looksLikeError(markdown)) {
        await writeFile(resolve(outDir, fileNameFor(url)), `${markdown}\n`, 'utf8');
        written += 1;
      } else {
        // Empty or soft-error content — do not overwrite the good snapshot.
        failed.push(url);
      }

      for (const link of result.links) {
        let parsed: URL;
        try {
          parsed = new URL(link);
        } catch {
          continue;
        }
        const c = canonical(parsed.toString());
        if (visited.has(c)) continue;
        if (!allowedHosts.has(parsed.host)) continue;
        if (!matchesInclude(parsed.pathname)) continue;
        visited.add(c);
        queue.push(c);
      }
    }
  } finally {
    await browser?.close();
  }

  if (failed.length > 0) {
    console.warn(
      `  ${failed.length}/${written + failed.length} pages failed (kept committed snapshots):\n` +
        failed.map((u) => `    - ${u}`).join('\n'),
    );
  }

  if (written === 0) {
    throw new Error(`Crawl produced no markdown pages for "${product.id}".`);
  }
  return written;
}

// Run standalone: `tsx src/stages/crawl.ts <product-id>`
const invokedDirectly = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (invokedDirectly) {
  const id = process.argv[2];
  const run = async () => {
    const selected = id ? [getProduct(id)] : products;
    for (const p of selected) {
      const n = await crawl(p);
      console.log(`Crawled ${n} pages → crawled-docs/${p.id}/`);
    }
  };
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
