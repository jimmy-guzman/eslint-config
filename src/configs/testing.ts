import jest from "eslint-plugin-jest";

import { ALLOWED_VITEST_FUNCS, GLOB_E2E, GLOB_TESTS } from "../constants";
import { hasJest, hasTestingLibrary, hasVitest } from "../has-dep";
import { jestRules } from "../rules/jest";
import { type Rules, type TestingOptions } from "../types";
import testingLibraryConfig from "./testing-library";

const testingConfig = (
  { framework = "vitest", utilities }: TestingOptions = {},
  autoDetect = true,
) => {
  const isVitest = autoDetect ? hasVitest() : framework === "vitest";
  const isJest = framework === "jest" || (autoDetect && hasJest());
  const includeTestingLibrary =
    !!utilities?.includes("testing-library") ||
    (autoDetect && hasTestingLibrary());

  return [
    {
      files: GLOB_TESTS,
      name: "jimmy.codes/testing",
      ...jest.configs["flat/recommended"],
    },
    ...(isVitest
      ? [
          {
            files: GLOB_TESTS,
            name: "jimmy.codes/testing/vitest",
            ...jest.configs["flat/recommended"],
            rules: {
              ...jestRules,
              "jest/no-deprecated-functions": "off",
              "jest/require-hook": [
                "error",
                {
                  allowedFunctionCalls: ALLOWED_VITEST_FUNCS,
                },
              ],
            } satisfies Rules,
          },
        ]
      : []),
    ...(isJest
      ? [
          {
            files: GLOB_TESTS,
            name: "jimmy.codes/testing/jest",
            ...jest.configs["flat/recommended"],
            rules: jestRules,
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
    ...(includeTestingLibrary ? testingLibraryConfig() : []),
  ];
};

export default testingConfig;
