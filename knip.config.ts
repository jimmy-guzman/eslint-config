import type { KnipConfig } from "knip";

export default {
  entry: ["fixtures/tsx.tsx"],
  ignoreDependencies: [
    "gitzy",
    "@commitlint/config-conventional",
    "commitlint",
    "@types/eslint",
    "@types/react",
  ],
} satisfies KnipConfig;
