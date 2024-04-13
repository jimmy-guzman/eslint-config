const GLOB_SRC_EXT = "?([cm])[jt]s?(x)";

export const GLOB_IGNORES = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb",

  "**/output",
  "**/coverage",
  "**/temp",
  "**/.temp",
  "**/tmp",
  "**/.tmp",
  "**/.history",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.next",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.cache",
  "**/.output",
  "**/.vite-inspect",
  "**/.yarn",
  "**/storybook-static",
  "**/.eslint-config-inspector",
  "**/playwright-report",

  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts",
  "**/vite.config.ts.*.mjs",
];

export const GLOB_JS = "**/*.?([cm])js";
export const GLOB_JSX = "**/*.?([cm])jsx";

export const GLOB_TS = "**/*.?([cm])ts";
export const GLOB_TSX = "**/*.?([cm])tsx";

export const GLOB_TESTS = [
  `**/__tests__/**/*.${GLOB_SRC_EXT}`,
  `**/*.spec.${GLOB_SRC_EXT}`,
  `**/*.test.${GLOB_SRC_EXT}`,
  `**/*.bench.${GLOB_SRC_EXT}`,
  `**/*.benchmark.${GLOB_SRC_EXT}`,
];

export const GLOB_E2E = [
  `**/e2e/**/*.spec.${GLOB_SRC_EXT}`,
  `**/e2e/**/*.test.${GLOB_SRC_EXT}`,
  `**/cypress/**/*.spec.${GLOB_SRC_EXT}`,
  `**/cypress/**/*.test.${GLOB_SRC_EXT}`,
];

export const GLOB_CJS = "**/*.cjs";

export const ALLOWED_VITEST_FUNCS = ["vi.mock"];

export const TESTING_LIBRARY_FAMILY = ["@testing-library/react"];
