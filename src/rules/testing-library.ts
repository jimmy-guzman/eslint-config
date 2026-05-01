import type { Rules, TestingLibraryOptions } from "../types";

import { unwrapDefault } from "../utils/interop-default";
import { rebrand } from "../utils/rebrand";

export const testingLibraryRules = async (options?: TestingLibraryOptions) => {
  const [jestDom, testingLibrary] = await Promise.all([
    import("eslint-plugin-jest-dom-ya"),
    unwrapDefault(import("eslint-plugin-testing-library")),
  ]);

  return {
    ...testingLibrary.configs["flat/react"].rules,
    ...rebrand(
      jestDom.configs["flat/recommended"].rules,
      "jest-dom-ya",
      "jest-dom",
    ),
    "testing-library/no-test-id-queries": "error",
    ...options?.overrides,
  } satisfies Rules;
};
