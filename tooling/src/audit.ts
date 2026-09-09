import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { products, getProduct, type ProductConfig } from './config/products.js';
import { extractSlashCommands, loadSnapshotFiles } from './stages/diff.js';
import { DATA_DIR, getProductCurrentDir, getProductCrawlDir } from './paths.js';
import { CheatSheetSchema, type CheatSheet } from './schema.js';

export interface AuditResult {
  productId: string;
  totalDocumentedCommands: string[];
  coveredCommands: string[];
  missingCommands: string[];
  coveragePercent: number;
}

/** Check if a command is mentioned in a cheat sheet (in any label or value). */
export function findCoveredCommands(
  sheet: CheatSheet,
  commands: string[],
): { covered: string[]; missing: string[] } {
  const allSheetText: string[] = [];
  for (const section of sheet.sections) {
    for (const row of section.rows) {
      allSheetText.push(row.label.toLowerCase());
      allSheetText.push(row.value.toLowerCase());
    }
  }
  const combined = allSheetText.join(' ');

  const covered: string[] = [];
  const missing: string[] = [];

  for (const cmd of commands) {
    const cmdLower = cmd.toLowerCase();
    // Check for command name as slash token, e.g. `/local` or within code tags
    if (combined.includes(cmdLower)) {
      covered.push(cmd);
    } else {
      missing.push(cmd);
    }
  }

  return { covered, missing };
}

/** Audit a single product for slash command coverage between documentation and cheat sheet. */
export async function auditProduct(product: ProductConfig): Promise<AuditResult> {
  const currentDir = getProductCurrentDir(product.id);
  const fallbackDir = getProductCrawlDir(product.id);

  let files = await loadSnapshotFiles(currentDir);
  if (files.size === 0) {
    files = await loadSnapshotFiles(fallbackDir);
  }

  const allDocText = Array.from(files.values()).join('\n\n');
  const documentedCommands = extractSlashCommands(allDocText);

  const jsonPath = resolve(DATA_DIR, `${product.id}.json`);
  let sheet: CheatSheet;
  try {
    const raw = await readFile(jsonPath, 'utf8');
    const parsed = CheatSheetSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) {
      throw new Error(`Invalid schema for ${product.id}.json:\n${parsed.error.toString()}`);
    }
    sheet = parsed.data;
  } catch (err) {
    throw new Error(`Could not load ${jsonPath}: ${(err as Error).message}`);
  }

  const { covered, missing } = findCoveredCommands(sheet, documentedCommands);
  const coveragePercent =
    documentedCommands.length > 0
      ? Math.round((covered.length / documentedCommands.length) * 100)
      : 100;

  return {
    productId: product.id,
    totalDocumentedCommands: documentedCommands,
    coveredCommands: covered,
    missingCommands: missing,
    coveragePercent,
  };
}

async function main(): Promise<void> {
  const targetId = process.argv[2];
  const selected = targetId && !targetId.startsWith('-') ? [getProduct(targetId)] : products;

  console.log('=== Slash Command & Feature Coverage Audit ===\n');

  let hasFailures = false;

  for (const product of selected) {
    try {
      const result = await auditProduct(product);
      console.log(`Product: ${product.displayName} (${product.id})`);
      console.log(`  Coverage: ${result.coveragePercent}% (${result.coveredCommands.length}/${result.totalDocumentedCommands.length} commands covered)`);
      console.log(`  Covered commands: ${result.coveredCommands.join(', ') || '(none)'}`);
      if (result.missingCommands.length > 0) {
        console.warn(`  Missing commands: ${result.missingCommands.join(', ')}`);
      } else {
        console.log(`  ✓ All documented slash commands are included in the cheat sheet!`);
      }
      console.log('');
    } catch (err) {
      console.error(`  ✗ Error auditing ${product.id}: ${(err as Error).message}\n`);
      hasFailures = true;
    }
  }

  if (hasFailures) {
    process.exit(1);
  }
}

const invokedDirectly = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (invokedDirectly) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
