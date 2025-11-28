import type { Rules, TestingLibraryOptions } from "../types";

import { interopDefault } from "../utils/interop-default";

export const testingLibraryRules = async (options?: TestingLibraryOptions) => {
  const [jestDom, testingLibrary] = await Promise.all([
    import("eslint-plugin-jest-dom"),
    interopDefault(import("eslint-plugin-testing-library")),
  ]);

  return {
    ...testingLibrary.configs["flat/react"].rules,
    ...jestDom.configs["flat/recommended"].rules,
    "testing-library/no-test-id-queries": "error",
    ...options?.overrides,
  } satisfies Rules;
};
