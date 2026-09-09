import test from 'node:test';
import assert from 'node:assert/strict';
import {
  extractSlashCommands,
  compareSnapshots,
  buildDiffPrompt,
} from '../src/stages/diff.js';
import { getProduct } from '../src/config/products.js';

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
