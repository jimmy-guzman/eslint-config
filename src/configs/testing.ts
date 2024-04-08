import jest from "eslint-plugin-jest";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { jestRules } from "../rules/jest";
import { type TestingOptions } from "../types";
import testingLibraryConfig from "./testing-library";

const testingConfig = ({ framework = "vitest", utilities }: TestingOptions) => {
  return [
    {
      name: "jimmy.codes/testing",
      files: GLOB_TESTS,
      ...jest.configs["flat/recommended"],
      rules: {
        ...jestRules,
        ...(framework === "vitest" && {
          "jest/no-deprecated-functions": "off",
        }),
      },
    },
    {
      name: "jimmy.codes/testing/disabled",
      files: GLOB_E2E,
      rules: {
        "jest/require-hook": "off",
      },
    },
    ...(utilities?.includes("testing-library") ? testingLibraryConfig() : []),
  ];
};

export default testingConfig;
