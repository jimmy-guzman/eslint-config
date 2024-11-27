import type { TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { vitestRules } from "../rules/vitest";
import { interopDefault } from "../utils/interop-default";

export const vitestConfig = async () => {
  const vitestPlugin = await interopDefault(import("@vitest/eslint-plugin"));

  return [
    {
      files: GLOB_TESTS,
      ignores: GLOB_E2E,
      ...vitestPlugin.configs.recommended,
      name: "jimmy.codes/vitest",
      rules: await vitestRules(),
    },
  ] satisfies TypedConfigItem[];
};
