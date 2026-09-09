import '../env.js'; // load tooling/.env (AWS_BEARER_TOKEN_BEDROCK / AWS_REGION / …)
import AnthropicBedrock from '@anthropic-ai/bedrock-sdk';
import type Anthropic from '@anthropic-ai/sdk';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import {
  DocDiffChangelogSchema,
  docDiffJsonSchema,
  type DocDiffChangelog,
} from '../schema.js';
import { getProduct, products, type ProductConfig } from '../config/products.js';
import {
  DIFFS_DIR,
  getProductCrawlDir,
  getProductCurrentDir,
  getProductPreviousDir,
  getProductDiffPath,
} from '../paths.js';

const MODEL = process.env.BEDROCK_MODEL_ID ?? 'global.anthropic.claude-sonnet-4-6';
const TOOL_NAME = 'emit_doc_diff';

/** Extract slash commands matching `/[a-z0-9_-]+` while filtering out generic paths, URLs, and markdown links. */
export function extractSlashCommands(markdown: string): string[] {
  // Strip out markdown link targets [text](url) and URL schemes
  const clean = markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/[^\s)]+/g, ' ');

  // Match inline backticked commands `/command` or slash tokens at word boundaries
  const matches = clean.match(/(?:`|\s|^)\/([a-z][a-z0-9_-]+)(?:`|\s|$|[.,:;!?])/gi) || [];
  const excluded = new Set([
    'docs',
    'help',
    'api',
    'tmp',
    'usr',
    'etc',
    'bin',
    'var',
    'home',
    'root',
    'opt',
    'mnt',
    'workspace',
    'node_modules',
    'crawled-docs',
    'dist',
    'tooling',
    'http',
    'https',
    'www',
    'jetbrains',
    'en-us',
    'v1',
    'v2',
    'dev',
    'app',
    'build',
    'src',
    'com',
    'org',
    'net',
  ]);

  const commands = new Set<string>();
  for (const m of matches) {
    const raw = m.replace(/[`\s.,:;!?]/g, '').toLowerCase();
    if (!raw.startsWith('/')) continue;
    const commandName = raw.slice(1);
    if (excluded.has(commandName)) continue;
    if (commandName.length >= 2 && /^[a-z][a-z0-9_-]*$/.test(commandName)) {
      commands.add(raw);
    }
  }
  return Array.from(commands).sort();
}

/** Load all markdown files in a directory into a Map of filename -> content. */
export async function loadSnapshotFiles(dirPath: string): Promise<Map<string, string>> {
  const filesMap = new Map<string, string>();
  try {
    const entries = await readdir(dirPath);
    for (const file of entries) {
      if (file.endsWith('.md')) {
        const content = await readFile(resolve(dirPath, file), 'utf8');
        filesMap.set(file, content);
      }
    }
  } catch {
    // Directory might not exist
  }
  return filesMap;
}

export interface SnapshotDiffSummary {
  newFiles: Map<string, string>;
  modifiedFiles: Map<string, { previous: string; current: string }>;
  deletedFiles: string[];
  unchangedFiles: string[];
  allCurrentCommands: string[];
}

/** Compare previous and current snapshot files to detect added, modified, deleted, and unchanged pages. */
export function compareSnapshots(
  prevFiles: Map<string, string>,
  currFiles: Map<string, string>,
): SnapshotDiffSummary {
  const newFiles = new Map<string, string>();
  const modifiedFiles = new Map<string, { previous: string; current: string }>();
  const deletedFiles: string[] = [];
  const unchangedFiles: string[] = [];

  const allCurrentText: string[] = [];
  for (const [file, content] of currFiles.entries()) {
    allCurrentText.push(content);
    if (!prevFiles.has(file)) {
      newFiles.set(file, content);
    } else {
      const prevContent = prevFiles.get(file)!;
      if (prevContent.trim() !== content.trim()) {
        modifiedFiles.set(file, { previous: prevContent, current: content });
      } else {
        unchangedFiles.push(file);
      }
    }
  }

  for (const file of prevFiles.keys()) {
    if (!currFiles.has(file)) {
      deletedFiles.push(file);
    }
  }

  const allCurrentCommands = extractSlashCommands(allCurrentText.join('\n\n'));

  return {
    newFiles,
    modifiedFiles,
    deletedFiles,
    unchangedFiles,
    allCurrentCommands,
  };
}

/** Build the semantic diff comparison prompt for Claude Bedrock. */
export function buildDiffPrompt(
  product: ProductConfig,
  diffSummary: SnapshotDiffSummary,
  hasPreviousSnapshot: boolean,
): string {
  const newPagesList = Array.from(diffSummary.newFiles.entries()).map(
    ([name, content]) => `### NEW DOC PAGE: ${name}\n\n${content}`,
  );

  const modifiedPagesList = Array.from(diffSummary.modifiedFiles.entries()).map(
    ([name, { previous, current }]) =>
      `### MODIFIED DOC PAGE: ${name}\n\n#### PREVIOUS VERSION:\n${previous}\n\n#### CURRENT VERSION:\n${current}`,
  );

  return [
    `You are a senior documentation & product analyst comparing two documentation snapshot sets for **${product.displayName}** (${product.id}).`,
    '',
    `Your goal is to extract newly introduced features, slash commands (such as \`/local\`, \`/goal\`, \`/demo\`, \`/debug\`, \`/plan\`), CLI flags, subagents, and major capabilities by calling the \`${TOOL_NAME}\` tool.`,
    '',
    hasPreviousSnapshot
      ? 'A previous documentation snapshot was available. Focus on what is brand new or substantially updated between the previous and current versions.'
      : 'No previous documentation snapshot was available (initial baseline run). Treat all preview, EAP, recently highlighted features, and detected slash commands as candidate highlights.',
    '',
    '### Rules & Guidelines:',
    '1. **New Slash Commands & Features**: Extract any newly documented commands, subagents, modes, or CLI flags into `newFeatures`. For each, provide a clear concise `name`, actionable `description`, the exact `commandOrFlag` (e.g. `"/local"`), a recommended cheat sheet section title in `sectionHint` (e.g. `"Latest and EAP"`, `"Models & Auth"`, `"CLI & Workflows"`), and the `sourceFile`.',
    '2. **Updated Features**: Capture modified capabilities or altered flags into `updatedFeatures`.',
    '3. **Deprecated Features**: Capture any explicitly removed or deprecated features into `deprecatedFeatures`.',
    '4. **All Detected Commands**: Include all valid slash commands found across all documentation in `allDetectedCommands`.',
    '',
    `### Detected Slash Commands from text analysis:`,
    diffSummary.allCurrentCommands.length > 0
      ? diffSummary.allCurrentCommands.map((c) => `- ${c}`).join('\n')
      : '(none detected)',
    '',
    `### Unchanged Documentation Pages (${diffSummary.unchangedFiles.length}):`,
    diffSummary.unchangedFiles.length > 0
      ? diffSummary.unchangedFiles.map((f) => `- ${f}`).join('\n')
      : '(none)',
    '',
    `=== NEW DOCUMENTATION PAGES (${diffSummary.newFiles.size}) ===`,
    newPagesList.length > 0 ? newPagesList.join('\n\n---\n\n') : '(no new pages)',
    '',
    `=== MODIFIED DOCUMENTATION PAGES (${diffSummary.modifiedFiles.size}) ===`,
    modifiedPagesList.length > 0 ? modifiedPagesList.join('\n\n---\n\n') : '(no modified pages)',
  ].join('\n');
}

/**
 * Execute the semantic diffing stage for a product.
 * Compares `crawled-docs/<product>/previous/` with `crawled-docs/<product>/current/`
 * and persists the structured changelog to `tooling/data/diffs/<product>.json`.
 */
export async function diffDocs(product: ProductConfig): Promise<DocDiffChangelog> {
  const currentDir = getProductCurrentDir(product.id);
  const previousDir = getProductPreviousDir(product.id);
  const fallbackDir = getProductCrawlDir(product.id);

  let currFiles = await loadSnapshotFiles(currentDir);
  if (currFiles.size === 0) {
    // Fall back to flat crawled-docs/<product>
    currFiles = await loadSnapshotFiles(fallbackDir);
  }

  if (currFiles.size === 0) {
    throw new Error(
      `No crawled documentation found for "${product.id}" in ${currentDir} or ${fallbackDir}. Run crawl stage first.`,
    );
  }

  const prevFiles = await loadSnapshotFiles(previousDir);
  const hasPreviousSnapshot = prevFiles.size > 0;
  const diffSummary = compareSnapshots(prevFiles, currFiles);

  const nowIso = new Date().toISOString();

  // If there are no changes between previous and current snapshots, produce an up-to-date baseline
  if (hasPreviousSnapshot && diffSummary.newFiles.size === 0 && diffSummary.modifiedFiles.size === 0) {
    const existingDiffPath = getProductDiffPath(product.id);
    try {
      const existing = JSON.parse(await readFile(existingDiffPath, 'utf8'));
      const parsed = DocDiffChangelogSchema.safeParse(existing);
      if (parsed.success) {
        return parsed.data;
      }
    } catch {
      // Proceed to build clean baseline
    }

    const baselineChangelog: DocDiffChangelog = {
      productId: product.id,
      previousSnapshot: 'previous',
      currentSnapshot: 'current',
      generatedAt: nowIso,
      newFeatures: [],
      updatedFeatures: [],
      deprecatedFeatures: [],
      allDetectedCommands: diffSummary.allCurrentCommands,
    };

    await mkdir(DIFFS_DIR, { recursive: true });
    await writeFile(
      getProductDiffPath(product.id),
      `${JSON.stringify(baselineChangelog, null, 2)}\n`,
      'utf8',
    );
    return baselineChangelog;
  }

  const client = new AnthropicBedrock({ awsRegion: process.env.AWS_REGION });
  const prompt = buildDiffPrompt(product, diffSummary, hasPreviousSnapshot);

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 8000,
    tools: [
      {
        name: TOOL_NAME,
        description: 'Emit the structured documentation diff changelog.',
        input_schema: docDiffJsonSchema as unknown as Anthropic.Tool.InputSchema,
      },
    ],
    tool_choice: { type: 'tool', name: TOOL_NAME },
    messages: [{ role: 'user', content: prompt }],
  });

  const toolUse = response.content.find(
    (block): block is Anthropic.ToolUseBlock =>
      block.type === 'tool_use' && block.name === TOOL_NAME,
  );

  if (!toolUse) {
    throw new Error(`Model did not return a ${TOOL_NAME} tool call for "${product.id}".`);
  }

  const parsed = DocDiffChangelogSchema.safeParse(toolUse.input);
  if (!parsed.success) {
    throw new Error(
      `Diff changelog for "${product.id}" failed validation:\n${parsed.error.toString()}`,
    );
  }

  await mkdir(DIFFS_DIR, { recursive: true });
  const outPath = getProductDiffPath(product.id);
  await writeFile(outPath, `${JSON.stringify(parsed.data, null, 2)}\n`, 'utf8');

  return parsed.data;
}

// Run standalone: `tsx src/stages/diff.ts <product-id>`
const invokedDirectly = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (invokedDirectly) {
  const id = process.argv[2];
  const run = async () => {
    const selected = id ? [getProduct(id)] : products;
    for (const p of selected) {
      console.log(`Analyzing doc diff for ${p.displayName} (${p.id})...`);
      const diff = await diffDocs(p);
      console.log(
        `Wrote data/diffs/${p.id}.json (Detected ${diff.newFeatures.length} new features, ${diff.allDetectedCommands.length} commands)`,
      );
    }
  };
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
