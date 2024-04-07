import * as jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";

import { GLOB_E2E, GLOB_TESTS } from "../constants";

const testingLibraryConfig = () => {
  return [
    {
      name: "jimmy.codes/testing-library",
      files: GLOB_TESTS,
      plugins: {
        "testing-library": testingLibrary,
        "jest-dom": jestDom,
      },
      rules: {
        ...testingLibrary.configs.react.rules,
        ...jestDom.configs["flat/recommended"].rules,
      },
    },
    {
      name: "jimmy.codes/testing-library/disabled",
      files: GLOB_E2E,
      rules: {
        "testing-library/prefer-screen-queries": "off",
      },
    },
  ];
};

export default testingLibraryConfig;
