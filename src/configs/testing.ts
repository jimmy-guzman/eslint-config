import type { TestingOptions, TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { jestRules } from "../rules/jest";
import { vitestRules } from "../rules/vitest";
import { hasJest, hasVitest } from "../utils/has-dependency";
import { interopDefault } from "../utils/interop-default";

export const testingConfig = async (
  { framework = "vitest" }: TestingOptions = {},
  autoDetect = true,
) => {
  const isVitest = autoDetect ? hasVitest() : framework === "vitest";
  const isJest = framework === "jest" || (autoDetect && hasJest());

  const configs: TypedConfigItem[] = [];

  if (isVitest) {
    const jestPlugin = await interopDefault(import("eslint-plugin-jest"));

    configs.push({
      files: GLOB_TESTS,
      ignores: GLOB_E2E,
      ...jestPlugin.configs["flat/recommended"],
      name: "jimmy.codes/vitest",
      rules: await vitestRules(),
    });
  }

  if (isJest) {
    const jestPlugin = await interopDefault(import("eslint-plugin-jest"));

    configs.push({
      files: GLOB_TESTS,
      ignores: GLOB_E2E,
      ...jestPlugin.configs["flat/recommended"],
      name: "jimmy.codes/jest",
      rules: await jestRules(),
    });
  }

  return configs;
};
