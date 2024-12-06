import jsdocPlugin from "eslint-plugin-jsdoc";

import type { Rules } from "../types";

export const jsdocRules = () => {
  return {
    ...jsdocPlugin.configs["flat/recommended-typescript-error"].rules,
    "jsdoc/require-jsdoc": "off",
    "jsdoc/require-param": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/tag-lines": [
      "error",
      "always",
      {
        applyToEndTag: false,
      },
    ],
  } satisfies Rules;
};
