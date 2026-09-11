import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { products } from '../src/config/products.js';
import { CheatSheetSchema, DocDiffChangelogSchema } from '../src/schema.js';
import { DATA_DIR, TOOLING_ROOT, getProductDiffPath } from '../src/paths.js';

// The render stage refuses invalid data/<id>.json and the extract stage silently
// drops an invalid data/diffs/<id>.json, so the committed artifacts must always
// match the schemas they are produced under.
for (const product of products) {
  test(`committed cheat-sheet data for ${product.id} validates against CheatSheetSchema`, async () => {
    const raw = await readFile(resolve(DATA_DIR, `${product.id}.json`), 'utf8');
    const parsed = CheatSheetSchema.safeParse(JSON.parse(raw));
    assert.ok(parsed.success, parsed.success ? '' : parsed.error.toString());
  });

  test(`committed diff changelog for ${product.id} validates and matches the product id`, async () => {
    const raw = await readFile(getProductDiffPath(product.id), 'utf8');
    const parsed = DocDiffChangelogSchema.safeParse(JSON.parse(raw));
    assert.ok(parsed.success, parsed.success ? '' : parsed.error.toString());
    if (parsed.success) {
      assert.equal(parsed.data.productId, product.id);
    }
  });

  test(`editorial seed for ${product.id} exists`, async () => {
    const seed = await stat(resolve(TOOLING_ROOT, product.editorialSeedPath));
    assert.ok(seed.isFile());
  });
}
