import { defineConfig } from "./src/factory";

export default defineConfig({
  astro: true,
  gitignore: true,
  nextjs: true,
  playwright: true,
  react: true,
  storybook: true,
  tanstackQuery: true,
  testingLibrary: true,
  typescript: true,
  vitest: {
    globals: "implicit",
  },
});
