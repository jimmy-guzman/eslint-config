import type { TypedConfigItem, VitestOptions } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../globs";
import { vitestRules } from "../rules/vitest";
import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";

export default async function vitestConfig(options: boolean | VitestOptions) {
  const vitestPlugin = await interopDefault(import("@vitest/eslint-plugin"));
  const extractedOptions = extractOptions(options);

  return [
    {
      files: GLOB_TESTS,
      ignores: GLOB_E2E,
      ...vitestPlugin.configs.recommended,
      name: "jimmy.codes/vitest",
      rules: await vitestRules(extractedOptions),
    },
  ] satisfies TypedConfigItem[];
}
