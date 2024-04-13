import jest from "eslint-plugin-jest";

import { ALLOWED_VITEST_FUNCS, GLOB_E2E, GLOB_TESTS } from "../constants";
import { hasJest, hasTestingLibrary, hasVitest } from "../has-dep";
import { jestRules } from "../rules/jest";
import { type Rules, type TestingOptions } from "../types";
import testingLibraryConfig from "./testing-library";

const testingConfig = (
  { framework = "vitest", utilities }: TestingOptions = {},
  autoDetect = false,
) => {
  const isVitest = autoDetect ? hasVitest() : framework === "vitest";
  const isJest = framework === "jest" || (autoDetect && hasJest());
  const includeTestingLibrary =
    !!utilities?.includes("testing-library") ||
    (autoDetect && hasTestingLibrary());

  return [
    {
      name: "jimmy.codes/testing",
      files: GLOB_TESTS,
      ...jest.configs["flat/recommended"],
    },
    ...(isVitest
      ? [
          {
            name: "jimmy.codes/testing/vitest",
            files: GLOB_TESTS,
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
            name: "jimmy.codes/testing/jest",
            files: GLOB_TESTS,
            ...jest.configs["flat/recommended"],
            rules: jestRules,
          },
        ]
      : []),
    {
      name: "jimmy.codes/testing/disabled",
      files: GLOB_E2E,
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
