import '../env.js'; // load tooling/.env (AWS_BEARER_TOKEN_BEDROCK / AWS_REGION / …)
import AnthropicBedrock from '@anthropic-ai/bedrock-sdk';
import type Anthropic from '@anthropic-ai/sdk';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { CheatSheetSchema, cheatSheetJsonSchema, type CheatSheet } from '../schema.js';
import { getProduct, products, type ProductConfig } from '../config/products.js';
import { CRAWL_DIR, DATA_DIR, TOOLING_ROOT } from '../paths.js';

/**
 * Bedrock model id for extraction — Sonnet, deliberately (weekly cron, low
 * cost). Bedrock uses prefixed ids (`global.` = global endpoint, no premium;
 * `us.`/`eu.`/… = regional). Override with BEDROCK_MODEL_ID for a different
 * model, region prefix, or availability.
 */
const MODEL = process.env.BEDROCK_MODEL_ID ?? 'global.anthropic.claude-sonnet-4-6';
const TOOL_NAME = 'emit_cheatsheet';

/**
 * Gather crawled markdown for a product. Prefers the per-product directory
 * `crawled-docs/<id>/`; falls back to any flat `crawled-docs/*.md` files whose
 * name contains the product id.
 */
async function loadCrawledMarkdown(product: ProductConfig): Promise<string> {
  const chunks: string[] = [];

  const perProductDir = resolve(CRAWL_DIR, product.id);
  try {
    const files = (await readdir(perProductDir)).filter((f) => f.endsWith('.md'));
    for (const f of files.sort()) {
      chunks.push(await readFile(resolve(perProductDir, f), 'utf8'));
    }
  } catch {
    /* no per-product directory yet */
  }

  if (chunks.length === 0) {
    try {
      const flat = (await readdir(CRAWL_DIR)).filter(
        (f) => f.endsWith('.md') && f.toLowerCase().includes(product.id),
      );
      for (const f of flat.sort()) {
        chunks.push(await readFile(resolve(CRAWL_DIR, f), 'utf8'));
      }
    } catch {
      /* no crawled-docs dir at all */
    }
  }

  return chunks.join('\n\n---\n\n');
}

async function loadEditorialSeed(product: ProductConfig): Promise<string> {
  const path = resolve(TOOLING_ROOT, product.editorialSeedPath);
  try {
    return await readFile(path, 'utf8');
  } catch {
    return '';
  }
}

function buildPrompt(product: ProductConfig, markdown: string, seed: string): string {
  return [
    `You are producing a dense, printable cheat sheet for **${product.displayName}**, a JetBrains AI tool.`,
    '',
    'Below are (1) a curated editorial seed describing the tone, key sections, and demo flavor to preserve, and (2) the crawled official documentation. Use the documentation as the source of truth for facts; use the editorial seed for voice, section selection, and emphasis.',
    '',
    'Produce content for the cheat sheet by calling the `emit_cheatsheet` tool. Requirements:',
    '- 12–20 color-coded sections. Keep sections similar in size (~6–9 rows each) and prefer a section count divisible by 4, so the four auto-flowed columns stay even in height (the renderer balances by content height, not by the `column` field).',
    '- Each row is a short code-style `label` and a concise `value` (one short phrase). Use inline `<code>…</code>` for commands, flags, filenames, and identifiers. Escape literal `&` as `&amp;` in values.',
    '- Vary `colorClass` (s1–s12) across sections for visual rhythm. Section titles are plain text — no emoji, and do not emit an `icon` field.',
    `- Header: highlight "${product.displayName}" with <span class="hl"> and one key word with <span class="hl2"> in the title. Set docsUrl to ${product.docsHubUrl}.`,
    '- Keep it practical and demo-oriented: prioritize the most important commands, flags, controls, and genuinely useful tips & tricks. Do not invent features not present in the docs.',
    "- Make \"Getting Started\" the FIRST section, and place \"Latest & EAP\" (or \"What's New\") as the SECOND section — it consolidates the newest and EAP-tagged / preview capabilities described in the docs. Ground every entry in the documentation — never invent recency or version claims.",
    '- No trivial rows: every row must be specific to this tool and non-obvious. Omit generic computing steps that are not tool-specific (e.g. `cd` into a directory, opening a terminal, generic OS/editor actions).',
    '- No repetition: each command, flag, file path, keyboard shortcut, or concept must appear in exactly ONE section — the single most relevant one. Never repeat the same item across sections. If two sections would overlap, split the responsibility so each owns a distinct slice.',
    '',
    '=== EDITORIAL SEED ===',
    seed || '(none provided)',
    '',
    '=== CRAWLED DOCUMENTATION ===',
    markdown || '(no documentation found)',
  ].join('\n');
}

/** Run Claude with a forced tool call and return validated cheat-sheet data. */
export async function extract(product: ProductConfig): Promise<CheatSheet> {
  const markdown = await loadCrawledMarkdown(product);
  if (!markdown.trim()) {
    throw new Error(
      `No crawled markdown for "${product.id}" in ${CRAWL_DIR}. Run the crawl stage first.`,
    );
  }
  const seed = await loadEditorialSeed(product);

  // Auth resolves from the environment: AWS_BEARER_TOKEN_BEDROCK (a Bedrock API
  // key), or the standard AWS credential chain (AWS_ACCESS_KEY_ID/.. or an
  // assumed role). Region defaults to AWS_REGION, else us-east-1.
  const client = new AnthropicBedrock({ awsRegion: process.env.AWS_REGION });

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    tools: [
      {
        name: TOOL_NAME,
        description: 'Emit the structured cheat-sheet content for rendering.',
        input_schema: cheatSheetJsonSchema as unknown as Anthropic.Tool.InputSchema,
      },
    ],
    tool_choice: { type: 'tool', name: TOOL_NAME },
    messages: [{ role: 'user', content: buildPrompt(product, markdown, seed) }],
  });

  const toolUse = response.content.find(
    (block): block is Anthropic.ToolUseBlock => block.type === 'tool_use' && block.name === TOOL_NAME,
  );
  if (!toolUse) {
    throw new Error(`Model did not return a ${TOOL_NAME} tool call for "${product.id}".`);
  }

  const parsed = CheatSheetSchema.safeParse(toolUse.input);
  if (!parsed.success) {
    throw new Error(`Extracted data for "${product.id}" failed validation:\n${parsed.error.toString()}`);
  }

  await mkdir(DATA_DIR, { recursive: true });
  const out = resolve(DATA_DIR, `${product.id}.json`);
  await writeFile(out, `${JSON.stringify(parsed.data, null, 2)}\n`, 'utf8');
  return parsed.data;
}

// Run standalone: `tsx src/stages/extract.ts <product-id>`
const invokedDirectly = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (invokedDirectly) {
  const id = process.argv[2];
  const run = async () => {
    const selected = id ? [getProduct(id)] : products;
    for (const p of selected) {
      await extract(p);
      console.log(`Extracted data/${p.id}.json`);
    }
  };
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
