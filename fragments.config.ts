import type { FragmentsConfig } from '@usefragments/core';

const config: FragmentsConfig = {
  // Repo-root-relative app/source path used by Cloud and doctor.
  app: {
    path: '.',
    // Governance scan scope — what `fragments check` reads. Kept app-wide
    // so CI matches the editor write-hook. (`components` below is the
    // narrower auto-doc primitives glob — do not conflate the two.)
    include: [
      '**/*.{tsx,jsx}',
      '**/*.{scss,css}',
    ],
  },

  // Glob patterns for finding fragment/story files
  include: [
    'src/components/**/*.contract.json'
  ],

  // Glob patterns to exclude
  exclude: ['**/node_modules/**'],

  // Glob patterns for finding component files (for auto-documentation)
  components: [
    'src/components/**/*.{tsx,jsx}'
  ],


  // Framework (react, vue, svelte)
  framework: 'react',

  // Pinned guardrails preset. Upgrade explicitly via fragments init --preset.
  govern: {
    presets: ['universal@2'],
    // Canonical component source — detected by fragments init. Raw HTML
    // equivalents (e.g. <button>) are flagged with a canonical suggestion.
    canonicalSources: [
      {
        kind: 'directory',
        path: 'src/components',
      },
    ],
  },

  // Design token files (CSS custom properties, SCSS vars, DTCG)
  tokens: {
    sources: [
      { path: 'src/styles/tokens.css', format: 'css' }
    ],
  },

  // Local canonical primitives — init mapped these confidently-classified
  // components to their native HTML element so raw <tag> usage suggests
  // them. Prune any mapping you don't want enforced.
  inspect: {
    localCanonical: {
      Button: { importPath: 'src/components', resolves: [{ tag: 'button' }] },
    },
  },
};

export default config;
