import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Absolute path to the `tooling/` directory, regardless of cwd. */
export const TOOLING_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Absolute path to the repository root (parent of `tooling/`). */
export const REPO_ROOT = resolve(TOOLING_ROOT, '..');

export const DATA_DIR = resolve(TOOLING_ROOT, 'data');
export const DIFFS_DIR = resolve(DATA_DIR, 'diffs');
export const EDITORIAL_DIR = resolve(DATA_DIR, 'editorial');
export const TEMPLATES_DIR = resolve(TOOLING_ROOT, 'templates');
export const DIST_DIR = resolve(REPO_ROOT, 'dist');

/** Where the crawl stage writes per-product markdown snapshots. */
export const CRAWL_DIR = resolve(REPO_ROOT, 'crawled-docs');

/** Directory containing historical timestamped snapshot runs. */
export const SNAPSHOTS_DIR = resolve(CRAWL_DIR, 'snapshots');

/** Helper path resolvers for product crawl & diff folders */
export function getProductCrawlDir(productId: string): string {
  return resolve(CRAWL_DIR, productId);
}

export function getProductSnapshotsDir(productId: string): string {
  return resolve(CRAWL_DIR, productId, 'snapshots');
}

export function getProductCurrentDir(productId: string): string {
  return resolve(CRAWL_DIR, productId, 'current');
}

export function getProductPreviousDir(productId: string): string {
  return resolve(CRAWL_DIR, productId, 'previous');
}

export function getProductDiffPath(productId: string): string {
  return resolve(DIFFS_DIR, `${productId}.json`);
}
