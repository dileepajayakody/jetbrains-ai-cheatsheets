import test from 'node:test';
import assert from 'node:assert/strict';
import nunjucks from 'nunjucks';
import { TEMPLATES_DIR } from '../src/paths.js';
import type { CheatSheet } from '../src/schema.js';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(TEMPLATES_DIR), {
  autoescape: true,
  trimBlocks: true,
  lstripBlocks: true,
});

test('cheatsheet.njk renders badge-new for rows with isNew: true', () => {
  const sampleData: CheatSheet = {
    title: '<span class="hl">Junie</span> Cheat Sheet',
    brandName: 'JetBrains Junie',
    brandSub: 'Agentic Coding',
    badge: 'JETBRAINS',
    docsUrl: 'https://junie.jetbrains.com/docs/get-started-with-junie.html',
    docsLabel: 'Docs',
    sections: [
      {
        title: 'Latest and EAP',
        colorClass: 's11',
        column: 1,
        rows: [
          {
            label: '/local',
            value: 'Apple Silicon local inference',
            isNew: true,
          },
          {
            label: '/plan',
            value: 'Read-only plan mode',
          },
        ],
      },
    ],
  };

  const html = env.render('cheatsheet.njk', {
    ...sampleData,
    docsUrl: sampleData.docsUrl,
    displayName: 'Junie',
    productId: 'junie',
    accent: { hl: '#dbeafe', hl2: '#bbf7d0' },
  });

  assert.ok(html.includes('<span class="badge-new">NEW</span>/local'));
  assert.ok(!html.includes('<span class="badge-new">NEW</span>/plan'));
  assert.ok(html.includes('.badge-new {'));
});

test('cheatsheet.njk applies theme classes properly for different products', () => {
  const baseData: CheatSheet = {
    title: 'Test Cheat Sheet',
    brandName: 'Test Brand',
    brandSub: 'Test Sub',
    badge: 'JETBRAINS',
    docsUrl: 'https://www.jetbrains.com/help/ai-assistant/',
    docsLabel: 'Docs',
    sections: [
      {
        title: 'Section 1',
        colorClass: 's1',
        column: 1,
        rows: [{ label: 'cmd', value: 'desc', isNew: true }],
      },
    ],
  };

  const airHtml = env.render('cheatsheet.njk', {
    ...baseData,
    productId: 'air',
    displayName: 'JetBrains Air',
  });
  assert.ok(airHtml.includes('class="theme-air"'));
  assert.ok(airHtml.includes('.theme-air .badge-new'));

  const aiHtml = env.render('cheatsheet.njk', {
    ...baseData,
    productId: 'aiassistant',
    displayName: 'AI Assistant',
  });
  assert.ok(aiHtml.includes('class="theme-aiassistant"'));
  assert.ok(aiHtml.includes('.theme-aiassistant .badge-new'));
});
