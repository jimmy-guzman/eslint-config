import type { TestingLibraryOptions, TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../globs";
import { testingLibraryRules } from "../rules/testing-library";
import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";

export default async function testingLibraryConfig(
  options: boolean | TestingLibraryOptions,
): Promise<TypedConfigItem[]> {
  const extractedOptions = extractOptions(options);

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
      rules: await testingLibraryRules(extractedOptions),
    },
  ];
}
