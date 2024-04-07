import jest from "eslint-plugin-jest";
import * as jestDom from "eslint-plugin-jest-dom";

import { GLOB_TESTS } from "../constants";
import testingLibraryConfig from "./testing-library";

interface JestConfigOptions {
  stylistic?: boolean;
  testingLibrary?: boolean;
  react?: boolean;
}

const jestConfig = ({
  stylistic = true,
  testingLibrary = false,
  react = false,
}: JestConfigOptions = {}) => {
  return [
    {
      name: "jimmy.codes/jest",
      files: GLOB_TESTS,
      ...jest.configs["flat/recommended"],
    },
    {
      name: "jimmy.codes/jest/jest-dom",
      files: GLOB_TESTS,
      ...jestDom.configs["flat/recommended"],
    },
    ...(stylistic
      ? [
          {
            name: "jimmy.codes/jest/stylistic",
            files: GLOB_TESTS,
            ...jest.configs["flat/style"],
          },
        ]
      : []),
    ...(testingLibrary && react ? testingLibraryConfig() : []),
  ];
};

export default jestConfig;
