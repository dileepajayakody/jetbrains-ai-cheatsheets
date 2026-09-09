import test from 'node:test';
import assert from 'node:assert/strict';
import { findCoveredCommands } from '../src/audit.js';
import type { CheatSheet } from '../src/schema.js';

test('findCoveredCommands detects covered vs missing commands accurately', () => {
  const sheet: CheatSheet = {
    title: 'Test Cheat Sheet',
    brandName: 'Brand',
    brandSub: 'Sub',
    badge: 'JETBRAINS',
    docsUrl: 'https://junie.jetbrains.com/docs/',
    docsLabel: 'Docs',
    sections: [
      {
        title: 'Latest and EAP',
        colorClass: 's11',
        column: 1,
        rows: [
          { label: '/local', value: 'Local models inference', isNew: true },
          { label: 'Plan mode', value: 'Use <code>/plan</code> to plan changes' },
        ],
      },
      {
        title: 'CLI',
        colorClass: 's10',
        column: 2,
        rows: [
          { label: '/debug', value: 'Live debug session' },
        ],
      },
    ],
  };

  const documentedCommands = ['/local', '/plan', '/debug', '/goal', '/unknown'];
  const { covered, missing } = findCoveredCommands(sheet, documentedCommands);

  assert.deepEqual(covered.sort(), ['/debug', '/local', '/plan'].sort());
  assert.deepEqual(missing.sort(), ['/goal', '/unknown'].sort());
});
