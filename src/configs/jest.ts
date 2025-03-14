import type { TypedConfigItem } from "../types";

import { GLOB_E2E, GLOB_TESTS } from "../constants";
import { jestRules } from "../rules/jest";
import { interopDefault } from "../utils/interop-default";

export default async function jestConfig() {
  const jestPlugin = await interopDefault(import("eslint-plugin-jest"));

  return [
    {
      files: GLOB_TESTS,
      ignores: GLOB_E2E,
      ...jestPlugin.configs["flat/recommended"],
      name: "jimmy.codes/jest",
      rules: await jestRules(),
    },
  ] satisfies TypedConfigItem[];
}
