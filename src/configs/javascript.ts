import deMorganPlugin from "eslint-plugin-de-morgan";

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
        "de-morgan": deMorganPlugin,
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
