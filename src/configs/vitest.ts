import jest from "eslint-plugin-jest";
import * as jestDom from "eslint-plugin-jest-dom";

import { GLOB_TESTS } from "../constants";
import testingLibraryConfig from "./testing-library";

interface VitestConfigOptions {
  stylistic?: boolean;
  testingLibrary?: boolean;
  react?: boolean;
}

const vitestConfig = ({
  stylistic = true,
  testingLibrary = false,
  react = false,
}: VitestConfigOptions = {}) => {
  return [
    {
      name: "jimmy.codes/vitest",
      files: GLOB_TESTS,
      ...jest.configs["flat/recommended"],
      rules: {
        ...jest.configs["flat/recommended"].rules,
        "jest/no-deprecated-functions": "off",
      },
    },
    {
      name: "jimmy.codes/vitest/jest-dom",
      files: GLOB_TESTS,
      ...jestDom.configs["flat/recommended"],
    },
    ...(stylistic
      ? [
          {
            name: "jimmy.codes/vitest/stylistic",
            files: GLOB_TESTS,
            ...jest.configs["flat/style"],
          },
        ]
      : []),
    ...(testingLibrary && react ? testingLibraryConfig() : []),
  ];
};

export default vitestConfig;
