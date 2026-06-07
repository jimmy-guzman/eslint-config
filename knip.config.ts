import type { KnipConfig } from "knip";

export default {
  entry: ["fixtures/tsx.tsx"],
  ignoreDependencies: [
    "gitzy",
    "@commitlint/config-conventional",
    "commitlint",
    "@types/eslint",
    "@types/react",

    // TODO: remove when astro plus eslint-plugin-jsx-a11y-x types are supported somehow
    "@types/eslint-plugin-jsx-a11y",
    "eslint-plugin-jsx-a11y",
  ],
} satisfies KnipConfig;
