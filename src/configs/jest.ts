import jest from "eslint-plugin-jest";
import * as jestDom from "eslint-plugin-jest-dom";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { jestRules } from "../rules/jest";
import testingLibraryConfig from "./testing-library";

interface JestConfigOptions {
  testingLibrary?: boolean;
  react?: boolean;
}

const jestConfig = ({
  testingLibrary = false,
  react = false,
}: JestConfigOptions = {}) => {
  return [
    {
      name: "jimmy.codes/jest",
      files: GLOB_TESTS,
      ...jest.configs["flat/recommended"],
      rules: jestRules,
    },
    {
      name: "jimmy.codes/jest/jest-dom",
      files: GLOB_TESTS,
      ...jestDom.configs["flat/recommended"],
    },
    {
      name: "jimmy.codes/jest/disabled",
      files: GLOB_E2E,
      rules: {
        "jest/require-hook": "off",
      },
    },
    ...(testingLibrary && react ? testingLibraryConfig() : []),
  ];
};

export default jestConfig;
