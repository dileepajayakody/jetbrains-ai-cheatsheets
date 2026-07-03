import './env.js'; // load tooling/.env before any API client is constructed
import { Command } from 'commander';
import { products, getProduct, type ProductConfig } from './config/products.js';
import { crawl } from './stages/crawl.js';
import { extract } from './stages/extract.js';
import { render, renderIndex } from './stages/render.js';

interface BuildOptions {
  product?: string;
  skipCrawl?: boolean;
  skipExtract?: boolean;
}

/** Run the full crawl → extract → render pipeline for one product. */
async function buildProduct(product: ProductConfig, opts: BuildOptions): Promise<void> {
  console.log(`\n=== ${product.displayName} (${product.id}) ===`);

  if (!opts.skipCrawl) {
    // Crawl is best-effort: failures fall back to the last committed snapshot.
    try {
      await crawl(product);
    } catch (err) {
      console.warn(`  crawl failed, using existing snapshot: ${(err as Error).message}`);
    }
  } else {
    console.log('  crawl: skipped');
  }

  if (!opts.skipExtract) {
    // Extract is strict: invalid model output must fail the run.
    await extract(product);
  } else {
    console.log('  extract: skipped');
  }

  const out = await render(product);
  console.log(`  rendered → ${out}`);
}

async function main(): Promise<void> {
  const program = new Command();
  program
    .name('build')
    .description('Crawl → extract → render JetBrains AI cheat sheets')
    .option('-p, --product <id>', 'build a single product instead of all')
    .option('--skip-crawl', 'reuse existing crawled-docs snapshots')
    .option('--skip-extract', 'reuse existing data/*.json (render only)')
    .parse(process.argv);

  const opts = program.opts<BuildOptions>();
  const selected = opts.product ? [getProduct(opts.product)] : products;

  const failures: string[] = [];
  for (const product of selected) {
    try {
      await buildProduct(product, opts);
    } catch (err) {
      console.error(`  ✗ ${product.id}: ${(err as Error).message}`);
      failures.push(product.id);
    }
  }

  // Always (re)generate the landing page from whatever rendered successfully.
  const idx = await renderIndex(new Date().toISOString().slice(0, 10));
  console.log(`\nLanding page → ${idx}`);

  if (failures.length > 0) {
    console.error(`\nFailed: ${failures.join(', ')}`);
    process.exit(1);
  }
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
