import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/globs.ts"],
  format: ["esm"],
  publint: true,
  shims: true,
});
