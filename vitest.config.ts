import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      exclude: [...(configDefaults.coverage.exclude ?? []), "fixtures/**"],
    },
  },
});
