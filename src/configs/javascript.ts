import arrowReturnStylePlugin from "eslint-plugin-arrow-return-style-x";

import type { TypedConfigItem } from "../types";

import { GLOB_TESTS } from "../globs";
import { javascriptRules } from "../rules/javascript";

export const javascriptConfig = () => {
  return [
    {
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      name: "jimmy.codes/javascript",
      plugins: {
        "arrow-style": arrowReturnStylePlugin,
      },
      rules: javascriptRules,
    },
    {
      files: GLOB_TESTS,
      name: "jimmy.codes/javascript/testing",
      rules: {
        "no-magic-numbers": "off",
      },
    },
  ] satisfies TypedConfigItem[];
};
