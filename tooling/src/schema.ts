import { z } from 'zod';
import { isAllowedDocsUrl, sanitizeInline } from './sanitize.js';

/** A non-empty string carrying inline HTML, sanitized to the allowlist. */
const inlineHtml = z.string().min(1).transform(sanitizeInline);

/**
 * The CheatSheet schema is the contract between the LLM extract stage and the
 * fixed HTML template. It mirrors the structure of the original hand-crafted
 * `Junie/junie-cheatsheet.html`: a header band plus 12-ish color-coded sections
 * bucketed into four print columns.
 */

export const CheatSheetRowSchema = z.object({
  /** Left cell — short, code-style key (rendered in JetBrains Mono). Sanitized. */
  label: inlineHtml,
  /**
   * Right cell — the explanation. May contain allowlisted inline HTML
   * (`<code>`, `<a href="https…">`, `<strong>`, `<em>`, `<br>`) and entities
   * (e.g. `&amp;`); sanitized before it reaches the `| safe` template.
   */
  value: inlineHtml,
  /**
   * Optional flag indicating if this feature/command is newly introduced or highlighted.
   * Rendered as a visual "NEW" badge next to the label.
   */
  isNew: z.boolean().optional(),
});

export const CheatSheetSectionSchema = z.object({
  /** Optional, unused by the template — section bars render only the title. */
  icon: z.string().min(1).optional(),
  /** Section title, e.g. "Getting Started". Sanitized; rendered with `| safe`. */
  title: inlineHtml,
  /** Palette class s1–s12 controlling the header/accent colors. */
  colorClass: z.string().regex(/^s(1[0-2]|[1-9])$/, 'Must be s1 through s12'),
  /** Which of the four columns (1–4) this section is placed in. */
  column: z.number().int().min(1).max(4),
  rows: z.array(CheatSheetRowSchema).min(1),
});

export const CheatSheetSchema = z.object({
  /**
   * Big header title. May contain `<span class="hl">…</span>` /
   * `<span class="hl2">…</span>` markup to highlight key words; sanitized
   * before it reaches the `| safe` template.
   */
  title: inlineHtml,
  /** Brand line under the docs link, e.g. "JetBrains Agentic Coding". Sanitized. */
  brandName: inlineHtml,
  /** Small sub-line, e.g. "IDE · CLI · Headless · GitHub · GitLab". Sanitized. */
  brandSub: inlineHtml,
  /** Dark pill badge text. Defaults to "JETBRAINS". Sanitized. */
  badge: z.string().min(1).default('JETBRAINS').transform(sanitizeInline),
  /**
   * Destination of the docs button. Must be an `https://…jetbrains.com` URL —
   * this value is written into an anchor `href`. The render stage additionally
   * overrides it with the authoritative `ProductConfig.docsHubUrl`.
   */
  docsUrl: z.string().refine(isAllowedDocsUrl, {
    message: 'docsUrl must be an https URL on a jetbrains.com host',
  }),
  /** Visible label of the docs button. Sanitized; rendered with `| safe`. */
  docsLabel: inlineHtml,
  /** Optional provenance line value, e.g. "Built from docs scraped on …". */
  generatedNote: z.string().optional(),
  sections: z.array(CheatSheetSectionSchema).min(1),
});

export type CheatSheetRow = z.infer<typeof CheatSheetRowSchema>;
export type CheatSheetSection = z.infer<typeof CheatSheetSectionSchema>;
export type CheatSheet = z.infer<typeof CheatSheetSchema>;

/**
 * JSON Schema handed to Claude as a forced tool call. Kept in sync with the zod
 * schema above by hand (the Anthropic SDK wants a plain JSON Schema object).
 */
export const cheatSheetJsonSchema = {
  type: 'object',
  required: ['title', 'brandName', 'brandSub', 'docsUrl', 'docsLabel', 'sections'],
  properties: {
    title: {
      type: 'string',
      description:
        'Header title, e.g. "Junie — Agentic Coding Cheat Sheet". Highlight the product name with <span class="hl">…</span> and one key word with <span class="hl2">…</span>. Do NOT include an emoji.',
    },
    brandName: { type: 'string', description: 'Brand line, e.g. "JetBrains Agentic Coding".' },
    brandSub: { type: 'string', description: 'Short middot-separated capability list.' },
    badge: { type: 'string', description: 'Dark pill badge text. Use "JETBRAINS".' },
    docsUrl: {
      type: 'string',
      description: 'HTTPS URL of the official docs hub on a jetbrains.com host.',
    },
    docsLabel: { type: 'string', description: 'Visible label for the docs button.' },
    generatedNote: {
      type: 'string',
      description: 'Provenance line, e.g. "Built from docs scraped on YYYY-MM-DD".',
    },
    sections: {
      type: 'array',
      minItems: 8,
      items: {
        type: 'object',
        required: ['title', 'colorClass', 'column', 'rows'],
        properties: {
          title: { type: 'string', description: 'Plain-text section title (no HTML, no emoji).' },
          colorClass: {
            type: 'string',
            enum: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12'],
          },
          column: { type: 'integer', minimum: 1, maximum: 4 },
          rows: {
            type: 'array',
            minItems: 1,
            items: {
              type: 'object',
              required: ['label', 'value'],
              properties: {
                label: { type: 'string', description: 'Short code-style key.' },
                value: {
                  type: 'string',
                  description:
                    'Explanation. Only these inline tags are kept: <code>, <a href="https://…">, <strong>, <em>, <br>. Anything else is stripped. Escape & as &amp;.',
                },
                isNew: {
                  type: 'boolean',
                  description:
                    'Set to true if this feature or slash command is newly introduced or highlighted in the latest version.',
                },
              },
            },
          },
        },
      },
    },
  },
} as const;

/**
 * Zod schemas for the LLM documentation semantic diff changelog.
 * Compares two documentation snapshots to extract newly introduced commands,
 * updated features, deprecations, and all detected commands.
 */

export const DocDiffNewFeatureSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  commandOrFlag: z.string().nullish().transform((v) => v ?? undefined),
  sectionHint: z.string().nullish().transform((v) => v ?? undefined),
  sourceFile: z.string().nullish().transform((v) => v ?? undefined),
});

export const DocDiffUpdatedFeatureSchema = z.object({
  name: z.string().min(1),
  changes: z.string().min(1),
  commandOrFlag: z.string().nullish().transform((v) => v ?? undefined),
});

export const DocDiffDeprecatedFeatureSchema = z.object({
  name: z.string().min(1),
  reason: z.string().nullish().transform((v) => v ?? undefined),
});

export const DocDiffChangelogSchema = z.object({
  productId: z.string().min(1),
  previousSnapshot: z.string(),
  currentSnapshot: z.string(),
  generatedAt: z.string(),
  newFeatures: z.array(DocDiffNewFeatureSchema),
  updatedFeatures: z.array(DocDiffUpdatedFeatureSchema),
  deprecatedFeatures: z.array(DocDiffDeprecatedFeatureSchema),
  allDetectedCommands: z.array(z.string()),
});

export type DocDiffNewFeature = z.infer<typeof DocDiffNewFeatureSchema>;
export type DocDiffUpdatedFeature = z.infer<typeof DocDiffUpdatedFeatureSchema>;
export type DocDiffDeprecatedFeature = z.infer<typeof DocDiffDeprecatedFeatureSchema>;
export type DocDiffChangelog = z.infer<typeof DocDiffChangelogSchema>;

/**
 * JSON Schema handed to Claude for the emit_doc_diff tool call.
 */
export const docDiffJsonSchema = {
  type: 'object',
  required: [
    'productId',
    'previousSnapshot',
    'currentSnapshot',
    'generatedAt',
    'newFeatures',
    'updatedFeatures',
    'deprecatedFeatures',
    'allDetectedCommands',
  ],
  properties: {
    productId: { type: 'string', description: 'Product identifier (e.g. "junie").' },
    previousSnapshot: {
      type: 'string',
      description: 'Identifier, timestamp, or description of the previous snapshot ("none" if first crawl).',
    },
    currentSnapshot: {
      type: 'string',
      description: 'Identifier, timestamp, or description of current snapshot.',
    },
    generatedAt: {
      type: 'string',
      description: 'ISO-8601 timestamp when this diff was generated.',
    },
    newFeatures: {
      type: 'array',
      description:
        'Newly introduced features, slash commands (e.g. /local, /goal), flags, or subagents found in current docs.',
      items: {
        type: 'object',
        required: ['name', 'description'],
        properties: {
          name: { type: 'string', description: 'Feature or command name, e.g. "Junie Local (/local)".' },
          description: { type: 'string', description: 'Short summary of the capability and how to use it.' },
          commandOrFlag: { type: 'string', description: 'Associated slash command or CLI flag (e.g. "/local").' },
          sectionHint: {
            type: 'string',
            description: 'Recommended cheat sheet section title (e.g. "Latest and EAP", "Models & Auth").',
          },
          sourceFile: { type: 'string', description: 'Documentation filename where this was introduced.' },
        },
      },
    },
    updatedFeatures: {
      type: 'array',
      description: 'Existing features or commands with notable updates, new flags, or modified behaviors.',
      items: {
        type: 'object',
        required: ['name', 'changes'],
        properties: {
          name: { type: 'string', description: 'Feature name.' },
          changes: { type: 'string', description: 'Description of the updates or behavioral changes.' },
          commandOrFlag: { type: 'string', description: 'Associated slash command or CLI flag if applicable.' },
        },
      },
    },
    deprecatedFeatures: {
      type: 'array',
      description: 'Features or commands removed or marked as deprecated.',
      items: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string', description: 'Feature name.' },
          reason: { type: 'string', description: 'Deprecation rationale if mentioned.' },
        },
      },
    },
    allDetectedCommands: {
      type: 'array',
      description:
        'Comprehensive list of all slash commands (e.g. "/local", "/goal", "/plan", "/debug") detected across the documentation.',
      items: { type: 'string' },
    },
  },
} as const;
