export interface ProductConfig {
  /** Stable slug used for files and CLI args (e.g. "junie"). */
  id: string;
  /** Human-facing name shown in the template header/title. */
  displayName: string;
  /** Emoji used on the landing page card. */
  icon: string;
  /** One-line description used on the landing page card. */
  tagline: string;
  /** Firecrawl crawl entry points. */
  crawlSeeds: string[];
  /** Glob-ish include filters passed to Firecrawl crawl. */
  includePaths: string[];
  /** Canonical docs hub linked from the cheat sheet header. */
  docsHubUrl: string;
  /** Accent colors injected into the template's .hl / .hl2 highlights. */
  accent: {
    hl: string;
    hl2: string;
  };
  /** Output filename written to dist/. */
  outputFile: string;
  /** Path (relative to tooling/) of the curated editorial seed for the LLM. */
  editorialSeedPath: string;
}

export const products: ProductConfig[] = [
  {
    id: 'junie',
    displayName: 'Junie',
    icon: '🚀',
    tagline: 'The JetBrains coding agent — IDE, CLI, headless, GitHub & GitLab.',
    crawlSeeds: ['https://junie.jetbrains.com/docs/get-started-with-junie.html'],
    includePaths: ['/docs/junie-*', '/docs/get-started-with-junie*'],
    docsHubUrl: 'https://junie.jetbrains.com/docs/get-started-with-junie.html',
    accent: {
      hl: '#dbeafe',
      hl2: '#bbf7d0',
    },
    outputFile: 'junie.html',
    editorialSeedPath: 'data/editorial/junie.md',
  },
  {
    id: 'aiassistant',
    displayName: 'AI Assistant',
    icon: '🧠',
    tagline: 'In-IDE AI chat, completion & code-aware help across JetBrains IDEs.',
    crawlSeeds: ['https://www.jetbrains.com/help/ai-assistant/about-ai-assistant.html'],
    includePaths: ['/help/ai-assistant/*'],
    docsHubUrl: 'https://www.jetbrains.com/help/ai-assistant/ai-chat.html',
    accent: {
      hl: '#e0e7ff', // indigo-100
      hl2: '#f3e8ff', // purple-100
    },
    outputFile: 'aiassistant.html',
    editorialSeedPath: 'data/editorial/aiassistant.md',
  },
  {
    id: 'air',
    displayName: 'JetBrains Air',
    icon: '🌬️',
    tagline: 'Agentic development environment for fleets of background agents.',
    crawlSeeds: ['https://www.jetbrains.com/help/air/quick-start-with-air.html'],
    includePaths: ['/help/air/*'],
    docsHubUrl: 'https://www.jetbrains.com/help/air/quick-start-with-air.html',
    accent: {
      hl: '#ccfbf1', // teal-100
      hl2: '#e0f2fe', // sky-100
    },
    outputFile: 'air.html',
    editorialSeedPath: 'data/editorial/air.md',
  },
];

export function getProduct(id: string): ProductConfig {
  const product = products.find((p) => p.id === id);
  if (!product) {
    const known = products.map((p) => p.id).join(', ');
    throw new Error(`Unknown product "${id}". Known products: ${known}`);
  }
  return product;
}
