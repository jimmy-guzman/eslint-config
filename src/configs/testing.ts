import jest from "eslint-plugin-jest";

import { ALLOWED_VITEST_FUNCS, GLOB_E2E, GLOB_TESTS } from "../constants";
import { jestRules } from "../rules/jest";
import { type TestingOptions } from "../types";
import testingLibraryConfig from "./testing-library";

const testingConfig = ({
  framework = "vitest",
  utilities,
}: TestingOptions = {}) => {
  return [
    {
      name: "jimmy.codes/testing",
      files: GLOB_TESTS,
      ...jest.configs["flat/recommended"],
    },
    ...(framework === "vitest"
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
            },
          },
        ]
      : [
          {
            name: "jimmy.codes/testing/jest",
            files: GLOB_TESTS,
            ...jest.configs["flat/recommended"],
            rules: jestRules,
          },
        ]),
    {
      name: "jimmy.codes/testing/disabled",
      files: GLOB_E2E,
      rules: {
        "jest/expect-expect": "off",
        "jest/no-deprecated-functions": "off",
        "jest/require-hook": "off",
      },
    },
    ...(utilities?.includes("testing-library") ? testingLibraryConfig() : []),
  ];
};

export default testingConfig;
