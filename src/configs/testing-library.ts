import type { TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { testingLibraryRules } from "../rules/testing-library";
import { interopDefault } from "../utils/interop-default";

export const testingLibraryConfig = async () => {
  const [jestDom, testingLibrary] = await Promise.all([
    import("eslint-plugin-jest-dom"),
    interopDefault(import("eslint-plugin-testing-library")),
  ]);

  return [
    {
      files: GLOB_TESTS,
      ignores: GLOB_E2E,
      name: "jimmy.codes/testing-library",
      plugins: {
        "jest-dom": jestDom,
        "testing-library": testingLibrary,
      },
      rules: await testingLibraryRules(),
    },
  ] satisfies TypedConfigItem[];
};
