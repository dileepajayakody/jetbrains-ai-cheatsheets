import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CheatSheetRowSchema,
  CheatSheetSectionSchema,
  CheatSheetSchema,
  DocDiffChangelogSchema,
  DocDiffNewFeatureSchema,
} from '../src/schema.js';

test('CheatSheetRowSchema validates rows with and without isNew flag', () => {
  const rowWithNew = {
    label: '/local',
    value: 'Run on-device models on Apple Silicon',
    isNew: true,
  };
  const parsed = CheatSheetRowSchema.safeParse(rowWithNew);
  assert.equal(parsed.success, true);
  if (parsed.success) {
    assert.equal(parsed.data.label, '/local');
    assert.equal(parsed.data.isNew, true);
  }

  const rowWithoutNew = {
    label: '/help',
    value: 'Show help information',
  };
  const parsedWithout = CheatSheetRowSchema.safeParse(rowWithoutNew);
  assert.equal(parsedWithout.success, true);
  if (parsedWithout.success) {
    assert.equal(parsedWithout.data.isNew, undefined);
  }
});

test('DocDiffNewFeatureSchema handles optional and nullish fields gracefully', () => {
  const fullFeature = {
    name: 'Junie Local',
    description: 'Local inference engine',
    commandOrFlag: '/local',
    sectionHint: 'Latest and EAP',
    sourceFile: 'junie-local.md',
  };
  const parsed = DocDiffNewFeatureSchema.safeParse(fullFeature);
  assert.equal(parsed.success, true);
  if (parsed.success) {
    assert.equal(parsed.data.commandOrFlag, '/local');
    assert.equal(parsed.data.sectionHint, 'Latest and EAP');
  }

  const minimalFeature = {
    name: 'General capability',
    description: 'A capability without command or flag',
    commandOrFlag: null,
    sectionHint: null,
    sourceFile: null,
  };
  const parsedMinimal = DocDiffNewFeatureSchema.safeParse(minimalFeature);
  assert.equal(parsedMinimal.success, true);
  if (parsedMinimal.success) {
    assert.equal(parsedMinimal.data.commandOrFlag, undefined);
    assert.equal(parsedMinimal.data.sectionHint, undefined);
    assert.equal(parsedMinimal.data.sourceFile, undefined);
  }
});

test('DocDiffChangelogSchema validates complete diff reports', () => {
  const sampleDiff = {
    productId: 'junie',
    previousSnapshot: 'previous',
    currentSnapshot: 'current',
    generatedAt: '2026-09-01T12:00:00Z',
    newFeatures: [
      {
        name: 'Junie Local',
        description: 'Run local models on Apple Silicon',
        commandOrFlag: '/local',
        sectionHint: 'Latest and EAP',
      },
    ],
    updatedFeatures: [
      {
        name: 'Model Selection',
        changes: 'Added support for new reasoning effort levels',
        commandOrFlag: '/effort',
      },
    ],
    deprecatedFeatures: [],
    allDetectedCommands: ['/local', '/effort', '/plan', '/debug'],
  };

  const parsed = DocDiffChangelogSchema.safeParse(sampleDiff);
  assert.equal(parsed.success, true);
  if (parsed.success) {
    assert.equal(parsed.data.productId, 'junie');
    assert.equal(parsed.data.newFeatures.length, 1);
    assert.equal(parsed.data.newFeatures[0].commandOrFlag, '/local');
    assert.equal(parsed.data.allDetectedCommands.length, 4);
  }
});

test('CheatSheetSchema validates full cheat sheets including isNew badges', () => {
  const sampleCheatSheet = {
    title: '<span class="hl">Junie</span> — Agentic <span class="hl2">Coding</span> Cheat Sheet',
    brandName: 'JetBrains Junie',
    brandSub: 'CLI · IDE · CI/CD',
    badge: 'JETBRAINS',
    docsUrl: 'https://junie.jetbrains.com/docs/get-started-with-junie.html',
    docsLabel: 'Docs Hub',
    sections: [
      {
        title: 'Getting Started',
        colorClass: 's1',
        column: 1,
        rows: [{ label: 'Install', value: '<code>npm i -g @jetbrains/junie</code>' }],
      },
      {
        title: 'Latest and EAP',
        colorClass: 's11',
        column: 1,
        rows: [
          {
            label: '/local',
            value: 'Apple Silicon inference engine',
            isNew: true,
          },
        ],
      },
    ],
  };

  const parsed = CheatSheetSchema.safeParse(sampleCheatSheet);
  assert.equal(parsed.success, true);
  if (parsed.success) {
    assert.equal(parsed.data.sections[1].rows[0].isNew, true);
  }
});

test('CheatSheetRowSchema rejects a non-boolean isNew flag', () => {
  const parsed = CheatSheetRowSchema.safeParse({ label: '/local', value: 'desc', isNew: 'true' });
  assert.equal(parsed.success, false);
});

test('DocDiffNewFeatureSchema rejects features without a name or description', () => {
  assert.equal(DocDiffNewFeatureSchema.safeParse({ name: '', description: 'd' }).success, false);
  assert.equal(DocDiffNewFeatureSchema.safeParse({ name: 'Feature' }).success, false);
});

test('DocDiffChangelogSchema rejects incomplete or mistyped changelogs', () => {
  const valid = {
    productId: 'junie',
    previousSnapshot: 'previous',
    currentSnapshot: 'current',
    generatedAt: '2026-09-01T12:00:00Z',
    newFeatures: [],
    updatedFeatures: [],
    deprecatedFeatures: [],
    allDetectedCommands: ['/local'],
  };
  assert.equal(DocDiffChangelogSchema.safeParse(valid).success, true);

  const { allDetectedCommands: _dropped, ...missingCommands } = valid;
  assert.equal(DocDiffChangelogSchema.safeParse(missingCommands).success, false);

  assert.equal(
    DocDiffChangelogSchema.safeParse({ ...valid, allDetectedCommands: ['/local', 42] }).success,
    false,
  );
  assert.equal(
    DocDiffChangelogSchema.safeParse({
      ...valid,
      updatedFeatures: [{ name: 'Model selection' }], // `changes` is required
    }).success,
    false,
  );
  assert.equal(DocDiffChangelogSchema.safeParse({ ...valid, productId: '' }).success, false);
});
