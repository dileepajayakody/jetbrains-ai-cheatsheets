import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Absolute path to the `tooling/` directory, regardless of cwd. */
export const TOOLING_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Absolute path to the repository root (parent of `tooling/`). */
export const REPO_ROOT = resolve(TOOLING_ROOT, '..');

export const DATA_DIR = resolve(TOOLING_ROOT, 'data');
export const TEMPLATES_DIR = resolve(TOOLING_ROOT, 'templates');
export const DIST_DIR = resolve(REPO_ROOT, 'dist');

/** Where the crawl stage writes per-product markdown snapshots. */
export const CRAWL_DIR = resolve(REPO_ROOT, 'crawled-docs');
