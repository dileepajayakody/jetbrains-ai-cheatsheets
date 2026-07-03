import sanitizeHtml from 'sanitize-html';

/**
 * Strict allowlist sanitizer for the inline HTML that the template renders with
 * `| safe` (cheat-sheet `title`, row `label`, row `value`). Model-generated
 * (or hand-edited) JSON is untrusted input that ends up in published static
 * HTML, so this is a security boundary: anything outside the allowlist —
 * `<script>`, event handlers, `style`, `javascript:`/`data:` URIs, arbitrary
 * classes — is discarded.
 *
 * Allowed: `<code>`, `<a href="https|mailto">`, `<span class="hl|hl2">`,
 * `<strong>`, `<em>`, `<br>`. Entities are preserved (e.g. `&amp;`).
 */
export function sanitizeInline(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: ['code', 'a', 'span', 'strong', 'em', 'br'],
    allowedAttributes: {
      a: ['href'],
      span: ['class'],
    },
    // Only hl / hl2 survive on <span>; any other class is stripped.
    allowedClasses: {
      span: ['hl', 'hl2'],
    },
    allowedSchemes: ['https', 'mailto'],
    allowedSchemesByTag: { a: ['https', 'mailto'] },
    allowProtocolRelative: false,
    disallowedTagsMode: 'discard',
    transformTags: {
      // Harden any surviving link against tab-nabbing.
      a: (tagName, attribs) => ({
        tagName,
        attribs: { ...attribs, rel: 'noopener noreferrer nofollow' },
      }),
    },
  }).trim();
}

/** True only for an `https://…jetbrains.com` URL — used to gate the docs href. */
export function isAllowedDocsUrl(value: string): boolean {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  if (url.protocol !== 'https:') return false;
  return url.hostname === 'jetbrains.com' || url.hostname.endsWith('.jetbrains.com');
}
