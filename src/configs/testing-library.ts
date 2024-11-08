import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";

import type { TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";

const testingLibraryConfig = () => {
  return [
    {
      files: GLOB_TESTS,
      name: "jimmy.codes/testing/testing-library",
      plugins: {
        "jest-dom": jestDom,
        "testing-library": testingLibrary,
      },
      rules: {
        ...testingLibrary.configs.react.rules,
        ...jestDom.configs["flat/recommended"].rules,
      },
    },
    {
      files: GLOB_E2E,
      name: "jimmy.codes/testing/testing-library/disabled",
      rules: {
        "testing-library/prefer-screen-queries": "off",
      },
    },
  ] satisfies TypedConfigItem[];
};

export default testingLibraryConfig;
