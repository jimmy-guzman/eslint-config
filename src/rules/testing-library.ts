import type { Rules } from "../types";

import { interopDefault } from "../utils";

export const testingLibraryRules = async () => {
  const [jestDom, testingLibrary] = await Promise.all([
    import("eslint-plugin-jest-dom"),
    interopDefault(import("eslint-plugin-testing-library")),
  ]);

  return {
    ...testingLibrary.configs.react.rules,
    ...jestDom.configs["flat/recommended"].rules,
  } satisfies Rules;
};
