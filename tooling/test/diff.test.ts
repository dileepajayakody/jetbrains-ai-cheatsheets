import test, { afterEach } from 'node:test';
import assert from 'node:assert/strict';
import {
  extractSlashCommands,
  compareSnapshots,
  buildDiffPrompt,
  loadSnapshotFiles,
  diffDocs,
} from '../src/stages/diff.js';
import { getProduct, type ProductConfig } from '../src/config/products.js';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import {
  getProductCrawlDir,
  getProductCurrentDir,
  getProductDiffPath,
  getProductPreviousDir,
} from '../src/paths.js';

test('extractSlashCommands identifies slash commands and filters out paths and URLs', () => {
  const sampleDoc = `
# Junie CLI Features

Use \`/local\` to start the Apple Silicon inference engine.
You can also run \`/plan\` to start plan mode or \`/goal\` for goal tracking.
For debugging, use \`/debug\` or \`/demo\` for VM computer use demos.

Visit https://github.com/JetBrains/junie or check /docs/junie-cli.html.
Do not match /usr/bin/local or /tmp/data or /workspace/project.
Also [click here](/help/documentation) for details.
Other commands: \`/worktree\`, \`/remote\`, \`/model\`, \`/effort\`, \`/settings\`, \`/exit\`.
`;

  const extracted = extractSlashCommands(sampleDoc);

  assert.ok(extracted.includes('/local'), 'Should extract /local');
  assert.ok(extracted.includes('/plan'), 'Should extract /plan');
  assert.ok(extracted.includes('/goal'), 'Should extract /goal');
  assert.ok(extracted.includes('/debug'), 'Should extract /debug');
  assert.ok(extracted.includes('/demo'), 'Should extract /demo');
  assert.ok(extracted.includes('/worktree'), 'Should extract /worktree');
  assert.ok(extracted.includes('/remote'), 'Should extract /remote');
  assert.ok(extracted.includes('/model'), 'Should extract /model');
  assert.ok(extracted.includes('/effort'), 'Should extract /effort');

  assert.ok(!extracted.includes('/docs'), 'Should not extract /docs');
  assert.ok(!extracted.includes('/help'), 'Should not extract /help');
  assert.ok(!extracted.includes('/tmp'), 'Should not extract /tmp');
  assert.ok(!extracted.includes('/workspace'), 'Should not extract /workspace');
  assert.ok(!extracted.includes('/usr'), 'Should not extract /usr');
});

test('compareSnapshots detects new, modified, and unchanged files', () => {
  const prevFiles = new Map<string, string>([
    ['doc1.md', '# Doc 1 Content'],
    ['doc2.md', '# Doc 2 Old Content'],
    ['doc3.md', '# Doc 3 Unchanged'],
  ]);

  const currFiles = new Map<string, string>([
    ['doc2.md', '# Doc 2 Updated with /local command'],
    ['doc3.md', '# Doc 3 Unchanged'],
    ['doc4.md', '# Doc 4 Brand New Page with /goal'],
  ]);

  const summary = compareSnapshots(prevFiles, currFiles);

  assert.equal(summary.newFiles.size, 1);
  assert.ok(summary.newFiles.has('doc4.md'));

  assert.equal(summary.modifiedFiles.size, 1);
  assert.ok(summary.modifiedFiles.has('doc2.md'));

  assert.deepEqual(summary.deletedFiles, ['doc1.md']);
  assert.deepEqual(summary.unchangedFiles, ['doc3.md']);

  assert.ok(summary.allCurrentCommands.includes('/local'));
  assert.ok(summary.allCurrentCommands.includes('/goal'));
});

test('buildDiffPrompt formats comparison prompt with commands and page sections', () => {
  const product = getProduct('junie');
  const prevFiles = new Map<string, string>([['doc1.md', 'Old text']]);
  const currFiles = new Map<string, string>([
    ['doc1.md', 'Updated text with `/debug`'],
    ['doc2.md', 'New page with `/local`'],
  ]);

  const summary = compareSnapshots(prevFiles, currFiles);
  const prompt = buildDiffPrompt(product, summary, true);

  assert.ok(prompt.includes('Junie'));
  assert.ok(prompt.includes('NEW DOC PAGE: doc2.md'));
  assert.ok(prompt.includes('MODIFIED DOC PAGE: doc1.md'));
  assert.ok(prompt.includes('/debug'));
  assert.ok(prompt.includes('/local'));
});

test('extractSlashCommands lowercases, de-duplicates, sorts, and drops one-letter or generic tokens', () => {
  const doc = 'Try `/Plan` then /plan again, `/a` is too short, and /v1 or /api are not commands. Use `/goal`.';
  assert.deepEqual(extractSlashCommands(doc), ['/goal', '/plan']);
});

test('compareSnapshots treats whitespace-only differences as unchanged', () => {
  const prev = new Map([['doc.md', '# Title\n\nBody\n']]);
  const curr = new Map([['doc.md', '# Title\n\nBody\n\n\n']]);

  const summary = compareSnapshots(prev, curr);

  assert.equal(summary.modifiedFiles.size, 0);
  assert.deepEqual(summary.unchangedFiles, ['doc.md']);
});

test('buildDiffPrompt switches to baseline wording when no previous snapshot exists', () => {
  const product = getProduct('junie');
  const summary = compareSnapshots(new Map(), new Map([['doc.md', 'No commands here.']]));

  const baseline = buildDiffPrompt(product, summary, false);
  assert.ok(baseline.includes('initial baseline run'));
  assert.ok(baseline.includes('(none detected)'));
  assert.ok(baseline.includes('(no modified pages)'));
  assert.ok(baseline.includes('NEW DOC PAGE: doc.md'));

  const incremental = buildDiffPrompt(product, summary, true);
  assert.ok(incremental.includes('A previous documentation snapshot was available'));
  assert.ok(!incremental.includes('initial baseline run'));
});

test('loadSnapshotFiles returns only markdown files and an empty map for a missing directory', async () => {
  const dir = await mkdtemp(resolve(tmpdir(), 'snapshot-files-'));
  try {
    await writeFile(resolve(dir, 'page.md'), '# Page\n', 'utf8');
    await writeFile(resolve(dir, 'ignore.json'), '{}', 'utf8');

    const files = await loadSnapshotFiles(dir);
    assert.deepEqual(Array.from(files.entries()), [['page.md', '# Page\n']]);

    const missing = await loadSnapshotFiles(resolve(dir, 'does-not-exist'));
    assert.equal(missing.size, 0);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

// diffDocs resolves its directories from the product id, so the tests below use a
// throwaway id under crawled-docs/ and data/diffs/ and clean up after each test.
// Only the no-change path is exercised: it must complete without a model call.
const DIFF_TEST_ID = `zz-test-diff-stage-${process.pid}`;
const diffTestProduct: ProductConfig = {
  ...getProduct('junie'),
  id: DIFF_TEST_ID,
  displayName: 'Diff Stage Test Product',
};
const diffCrawlDir = getProductCrawlDir(DIFF_TEST_ID);
const diffCurrentDir = getProductCurrentDir(DIFF_TEST_ID);
const diffPreviousDir = getProductPreviousDir(DIFF_TEST_ID);
const diffOutPath = getProductDiffPath(DIFF_TEST_ID);

async function writeDoc(dir: string, name: string, content: string): Promise<void> {
  await mkdir(dir, { recursive: true });
  await writeFile(resolve(dir, name), content, 'utf8');
}

afterEach(async () => {
  await rm(diffCrawlDir, { recursive: true, force: true });
  await rm(diffOutPath, { force: true });
});

test('diffDocs throws when no crawled documentation exists for the product', async () => {
  await assert.rejects(diffDocs(diffTestProduct), /No crawled documentation found/);
});

test('diffDocs writes an empty baseline changelog when previous and current snapshots match', async () => {
  const page = 'Use `/local` for on-device models and `/plan` for plan mode.\n';
  await writeDoc(diffCurrentDir, 'page.md', page);
  await writeDoc(diffPreviousDir, 'page.md', page);

  const before = Date.now();
  const result = await diffDocs(diffTestProduct);

  assert.equal(result.productId, DIFF_TEST_ID);
  assert.equal(result.previousSnapshot, 'previous');
  assert.equal(result.currentSnapshot, 'current');
  assert.ok(Date.parse(result.generatedAt) >= before - 1000, 'generatedAt is a fresh ISO timestamp');
  assert.deepEqual(result.newFeatures, []);
  assert.deepEqual(result.updatedFeatures, []);
  assert.deepEqual(result.deprecatedFeatures, []);
  assert.deepEqual(result.allDetectedCommands, ['/local', '/plan']);

  const persisted = JSON.parse(await readFile(diffOutPath, 'utf8'));
  assert.deepEqual(persisted, result);
});

test('diffDocs returns the existing changelog untouched when snapshots match', async () => {
  const page = 'Use `/local`.\n';
  await writeDoc(diffCurrentDir, 'page.md', page);
  await writeDoc(diffPreviousDir, 'page.md', page);

  const existing = {
    productId: DIFF_TEST_ID,
    previousSnapshot: '2026-09-01',
    currentSnapshot: '2026-09-08',
    generatedAt: '2026-09-08T06:37:00.000Z',
    newFeatures: [{ name: 'Junie Local', description: 'On-device inference', commandOrFlag: '/local' }],
    updatedFeatures: [],
    deprecatedFeatures: [],
    allDetectedCommands: ['/local'],
  };
  const existingRaw = `${JSON.stringify(existing, null, 2)}\n`;
  await mkdir(resolve(diffOutPath, '..'), { recursive: true });
  await writeFile(diffOutPath, existingRaw, 'utf8');

  const result = await diffDocs(diffTestProduct);

  assert.equal(result.newFeatures.length, 1);
  assert.equal(result.newFeatures[0].name, 'Junie Local');
  assert.equal(result.generatedAt, existing.generatedAt);
  assert.equal(await readFile(diffOutPath, 'utf8'), existingRaw, 'file must not be rewritten');
});

test('diffDocs falls back to the flat crawled-docs/<product>/ layout when current/ is missing', async () => {
  const page = 'Run `/debug` to start a live session.\n';
  await writeDoc(diffCrawlDir, 'page.md', page);
  await writeDoc(diffPreviousDir, 'page.md', page);

  const result = await diffDocs(diffTestProduct);

  assert.deepEqual(result.allDetectedCommands, ['/debug']);
  assert.deepEqual(result.newFeatures, []);
});
