import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/globs.ts"],
  publint: true,
  shims: true,
});
