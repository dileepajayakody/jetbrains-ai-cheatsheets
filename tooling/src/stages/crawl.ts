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

/** Render a page and return its main content HTML plus absolute links. */
async function loadPage(page: Page, url: string): Promise<PageResult | null> {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: NAV_TIMEOUT_MS });
  } catch {
    // networkidle can stall on long-polling apps; fall back to DOM ready.
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
    } catch (err) {
      console.warn(`    nav failed ${url}: ${(err as Error).message}`);
      return null;
    }
  }
  await page.waitForSelector('article', { timeout: 8000 }).catch(() => undefined);
  await page.waitForTimeout(SETTLE_MS);

  return page.evaluate(() => {
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

  let browser: Browser | undefined;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage();

    while (queue.length > 0 && written < MAX_PAGES) {
      const url = queue.shift() as string;
      const result = await loadPage(page, url);
      if (!result) continue;

      const markdown = turndown
        .turndown(result.contentHtml)
        .replace(/﻿/g, '') // Writerside feedback anchor char
        .replace(/\[\]\([^)]*\)/g, '') // empty-text heading anchor links
        .replace(/[ \t]+$/gm, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
      if (markdown) {
        await writeFile(resolve(outDir, fileNameFor(url)), `${markdown}\n`, 'utf8');
        written += 1;
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
