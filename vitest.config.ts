import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      thresholds: { 100: true, autoUpdate: true },
    },
    globals: true,
    mockReset: true,
    restoreMocks: true,
  },
});
