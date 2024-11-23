import type { Rules, TestingOptions, TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { hasJest, hasVitest } from "../has-dep";
import { jestRules } from "../rules/jest";
import { vitestRules } from "../rules/vitest";
import { interopDefault } from "../utils";

export const testingConfig = async (
  { framework = "vitest" }: TestingOptions = {},
  autoDetect = true,
) => {
  const isVitest = autoDetect ? hasVitest() : framework === "vitest";
  const isJest = framework === "jest" || (autoDetect && hasJest());

  const configs: TypedConfigItem[] = [
    {
      files: GLOB_E2E,
      name: "jimmy.codes/e2e",
      rules: {
        "jest/expect-expect": "off",
        "jest/no-deprecated-functions": "off",
        "jest/require-hook": "off",
      } satisfies Rules,
    },
  ];

  if (isVitest) {
    const jestPlugin = await interopDefault(import("eslint-plugin-jest"));

    configs.push({
      files: GLOB_TESTS,
      ...jestPlugin.configs["flat/recommended"],
      name: "jimmy.codes/vitest",
      rules: await vitestRules(),
    });
  }

  if (isJest) {
    const jestPlugin = await interopDefault(import("eslint-plugin-jest"));

    configs.push({
      files: GLOB_TESTS,
      ...jestPlugin.configs["flat/recommended"],
      name: "jimmy.codes/jest",
      rules: await jestRules(),
    });
  }

  return configs;
};
