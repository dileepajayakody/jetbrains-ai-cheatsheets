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
});

export const CheatSheetSectionSchema = z.object({
  /** Leading emoji for the section header, e.g. "⚡". */
  icon: z.string().min(1),
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
        required: ['icon', 'title', 'colorClass', 'column', 'rows'],
        properties: {
          icon: { type: 'string', description: 'A single leading emoji.' },
          title: { type: 'string', description: 'Plain-text section title (no HTML).' },
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
              },
            },
          },
        },
      },
    },
  },
} as const;
