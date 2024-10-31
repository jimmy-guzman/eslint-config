import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        "fixtures/**",
        "scripts/**",
      ],
      thresholds: { 100: true },
    },
    globals: true,
    mockReset: true,
    restoreMocks: true,
  },
});
