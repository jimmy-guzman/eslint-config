import jest from "eslint-plugin-jest";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { jestRules } from "../rules/jest";
import testingLibraryConfig from "./testing-library";

interface VitestConfigOptions {
  testingLibrary?: boolean;
  react?: boolean;
}

const vitestConfig = ({
  testingLibrary = false,
  react = false,
}: VitestConfigOptions = {}) => {
  return [
    {
      name: "jimmy.codes/vitest",
      files: GLOB_TESTS,
      ...jest.configs["flat/recommended"],
      rules: {
        ...jestRules,
        "jest/no-deprecated-functions": "off",
      },
    },
    {
      name: "jimmy.codes/vitest/disabled",
      files: GLOB_E2E,
      rules: {
        "jest/require-hook": "off",
      },
    },
    ...(testingLibrary && react ? testingLibraryConfig() : []),
  ];
};

export default vitestConfig;
