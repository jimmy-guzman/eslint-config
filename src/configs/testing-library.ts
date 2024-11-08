import type { TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { interopDefault } from "../utils";

export const testingLibrary = async () => {
  const [jestDom, testingLibrary] = await Promise.all([
    import("eslint-plugin-jest-dom"),
    interopDefault(import("eslint-plugin-testing-library")),
  ]);

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
