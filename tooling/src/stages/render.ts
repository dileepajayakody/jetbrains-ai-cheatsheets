import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import nunjucks from 'nunjucks';
import { CheatSheetSchema, type CheatSheet } from '../schema.js';
import { getProduct, products, type ProductConfig } from '../config/products.js';
import { DATA_DIR, DIST_DIR, TEMPLATES_DIR } from '../paths.js';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(TEMPLATES_DIR), {
  autoescape: true,
  trimBlocks: true,
  lstripBlocks: true,
});

/** Load and validate the cheat-sheet JSON for a product. */
export async function loadCheatSheet(productId: string): Promise<CheatSheet> {
  const file = resolve(DATA_DIR, `${productId}.json`);
  let raw: string;
  try {
    raw = await readFile(file, 'utf8');
  } catch {
    throw new Error(`No cheat-sheet data at ${file}. Run the extract stage first.`);
  }
  const parsed = CheatSheetSchema.safeParse(JSON.parse(raw));
  if (!parsed.success) {
    throw new Error(`Invalid cheat-sheet data in ${file}:\n${parsed.error.toString()}`);
  }
  return parsed.data;
}

/** Render one product's cheat sheet HTML into dist/. Returns the output path. */
export async function render(product: ProductConfig): Promise<string> {
  const data = await loadCheatSheet(product.id);
  const html = env.render('cheatsheet.njk', {
    ...data,
    // Authoritative docs link comes from config, never from model output.
    docsUrl: product.docsHubUrl,
    displayName: product.displayName,
    accent: product.accent,
  });
  await mkdir(DIST_DIR, { recursive: true });
  const out = resolve(DIST_DIR, product.outputFile);
  await writeFile(out, html, 'utf8');
  return out;
}

/**
 * Render the landing page, linking only products whose `dist/<outputFile>`
 * actually exists — so a failed or never-built product isn't advertised with a
 * dead link.
 */
export async function renderIndex(generatedNote?: string): Promise<string> {
  await mkdir(DIST_DIR, { recursive: true });
  const available = [];
  for (const p of products) {
    try {
      await stat(resolve(DIST_DIR, p.outputFile));
      available.push(p);
    } catch {
      /* output not present — omit from the landing page */
    }
  }
  const html = env.render('index.njk', { products: available, generatedNote });
  const out = resolve(DIST_DIR, 'index.html');
  await writeFile(out, html, 'utf8');
  return out;
}

// Run standalone: `tsx src/stages/render.ts <product-id>`
const invokedDirectly = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (invokedDirectly) {
  const id = process.argv[2];
  const run = async () => {
    if (id) {
      const out = await render(getProduct(id));
      console.log(`Rendered ${out}`);
    } else {
      for (const p of products) {
        try {
          const out = await render(p);
          console.log(`Rendered ${out}`);
        } catch (err) {
          console.warn(`Skipped ${p.id}: ${(err as Error).message}`);
        }
      }
    }
    const idx = await renderIndex();
    console.log(`Rendered ${idx}`);
  };
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
