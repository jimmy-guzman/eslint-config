import type { JestOptions, TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../globs";
import { jestRules } from "../rules/jest";
import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";

export default async function jestConfig(
  options: boolean | JestOptions,
): Promise<TypedConfigItem[]> {
  const extractedOptions = extractOptions(options);

  const jestPlugin = await interopDefault(import("eslint-plugin-jest"));

  return [
    {
      files: GLOB_TESTS,
      ignores: GLOB_E2E,
      ...jestPlugin.configs["flat/recommended"],
      name: "jimmy.codes/jest",
      rules: await jestRules(extractedOptions),
    },
  ];
}
