import type { Rules, TestingOptions } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { hasJest, hasVitest } from "../has-dep";
import { jestRules } from "../rules/jest";
import { vitestRules } from "../rules/vitest";
import { interopDefault } from "../utils";

export const testingConfig = async (
  { framework = "vitest" }: TestingOptions = {},
  autoDetect = true,
) => {
  const jestPlugin = await interopDefault(import("eslint-plugin-jest"));

  const isVitest = autoDetect ? hasVitest() : framework === "vitest";
  const isJest = framework === "jest" || (autoDetect && hasJest());

  return [
    ...(isVitest
      ? [
          {
            files: GLOB_TESTS,
            name: "jimmy.codes/testing/vitest",
            ...jestPlugin.configs["flat/recommended"],
            rules: await vitestRules(),
          },
        ]
      : []),
    ...(isJest
      ? [
          {
            files: GLOB_TESTS,
            name: "jimmy.codes/testing/jest",
            ...jestPlugin.configs["flat/recommended"],
            rules: await jestRules(),
          },
        ]
      : []),
    {
      files: GLOB_E2E,
      name: "jimmy.codes/testing/disabled",
      rules: {
        "jest/expect-expect": "off",
        "jest/no-deprecated-functions": "off",
        "jest/require-hook": "off",
      } satisfies Rules,
    },
  ];
};
