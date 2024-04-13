import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    mockReset: true,
    clearMocks: true,
    restoreMocks: true,
    coverage: {
      thresholds: { 100: true },
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        "fixtures/**",
        "scripts/**",
      ],
    },
  },
});
