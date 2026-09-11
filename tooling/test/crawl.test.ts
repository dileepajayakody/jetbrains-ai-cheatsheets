import test, { afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { prepareSnapshotRotation } from '../src/stages/crawl.js';
import {
  getProductCrawlDir,
  getProductCurrentDir,
  getProductPreviousDir,
  getProductSnapshotsDir,
} from '../src/paths.js';

// prepareSnapshotRotation resolves directories from the product id, so use a
// throwaway id under crawled-docs/ and remove it after every test.
const TEST_ID = `zz-test-crawl-rotation-${process.pid}`;
const productDir = getProductCrawlDir(TEST_ID);
const currentDir = getProductCurrentDir(TEST_ID);
const previousDir = getProductPreviousDir(TEST_ID);

async function mdFiles(dir: string): Promise<string[]> {
  try {
    return (await readdir(dir)).filter((f) => f.endsWith('.md')).sort();
  } catch {
    return [];
  }
}

async function write(dir: string, name: string, content: string): Promise<void> {
  await mkdir(dir, { recursive: true });
  await writeFile(resolve(dir, name), content, 'utf8');
}

afterEach(async () => {
  await rm(productDir, { recursive: true, force: true });
});

test('prepareSnapshotRotation creates the layout for a product with no prior crawl', async () => {
  const result = await prepareSnapshotRotation(TEST_ID);

  assert.equal(result.productDir, productDir);
  assert.equal(result.currentDir, currentDir);
  assert.equal(result.previousDir, previousDir);
  assert.ok(
    result.snapshotDir.startsWith(getProductSnapshotsDir(TEST_ID)),
    'snapshot dir must live under <product>/snapshots/',
  );
  assert.ok(result.snapshotDir.endsWith(result.timestamp));
  // ISO timestamp with ':' and '.' replaced so it is a safe directory name.
  assert.match(result.timestamp, /^\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}-\d{3}Z$/);

  for (const dir of [result.snapshotDir, currentDir, previousDir]) {
    assert.ok((await stat(dir)).isDirectory(), `${dir} should exist`);
  }
  assert.deepEqual(await mdFiles(currentDir), []);
  assert.deepEqual(await mdFiles(previousDir), []);
});

test('prepareSnapshotRotation seeds previous/ from the legacy flat layout when current/ is empty', async () => {
  await write(productDir, 'a.md', '# A\n');
  await write(productDir, 'b.md', '# B\n');
  await write(productDir, 'notes.txt', 'not markdown');

  await prepareSnapshotRotation(TEST_ID);

  assert.deepEqual(await mdFiles(previousDir), ['a.md', 'b.md']);
  assert.equal(await readFile(resolve(previousDir, 'a.md'), 'utf8'), '# A\n');
  assert.equal(await readFile(resolve(previousDir, 'b.md'), 'utf8'), '# B\n');
  assert.ok(!(await readdir(previousDir)).includes('notes.txt'), 'only .md files are rotated');

  // The flat files stay in place for backward compatibility; current/ is empty for the crawl.
  assert.deepEqual(await mdFiles(productDir), ['a.md', 'b.md']);
  assert.deepEqual(await mdFiles(currentDir), []);
});

test('prepareSnapshotRotation replaces previous/ with current/ and clears current/', async () => {
  await write(currentDir, 'page.md', 'v2\n');
  await write(currentDir, 'added.md', 'brand new\n');
  await write(previousDir, 'page.md', 'v1\n');
  await write(previousDir, 'stale.md', 'gone from current\n');
  // A flat file must NOT win over current/ when current/ has content.
  await write(productDir, 'legacy.md', 'legacy\n');

  await prepareSnapshotRotation(TEST_ID);

  assert.deepEqual(await mdFiles(previousDir), ['added.md', 'page.md']);
  assert.equal(await readFile(resolve(previousDir, 'page.md'), 'utf8'), 'v2\n');
  assert.equal(await readFile(resolve(previousDir, 'added.md'), 'utf8'), 'brand new\n');

  assert.deepEqual(await mdFiles(currentDir), []);
  assert.ok((await stat(currentDir)).isDirectory(), 'current/ is recreated empty');
  assert.deepEqual(await mdFiles(productDir), ['legacy.md']);
});
