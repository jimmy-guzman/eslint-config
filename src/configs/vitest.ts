import jest from "eslint-plugin-jest";
import * as jestDom from "eslint-plugin-jest-dom";

import { GLOB_TESTS } from "../constants";
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
      name: "jimmy.codes/vitest/jest-dom",
      files: GLOB_TESTS,
      ...jestDom.configs["flat/recommended"],
    },
    ...(testingLibrary && react ? testingLibraryConfig() : []),
  ];
};

export default vitestConfig;
