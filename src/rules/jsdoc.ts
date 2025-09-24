import jsdocPlugin from "eslint-plugin-jsdoc";

import type { Rules } from "../types";

export const jsdocRules = () => {
  return {
    ...jsdocPlugin.configs["flat/recommended-typescript-error"].rules,
    "jsdoc/prefer-import-tag": "error", // Prefer @import over @see for module references
    "jsdoc/require-jsdoc": "off", // Disable enforced JSDoc (TypeScript provides type info)
    "jsdoc/require-next-description": "error", // Ensure @next has a description
    "jsdoc/require-param": "off", // Avoid redundant param documentation (rely on TypeScript)
    "jsdoc/require-returns": "off", // Avoid redundant return type documentation (rely on TypeScript)
    "jsdoc/require-throws-description": "error", // Ensure @throws has a description
    "jsdoc/require-yields-description": "error", // Ensure @yields has a description
    "jsdoc/tag-lines": [
      "error",
      "always",
      {
        applyToEndTag: false, // No need for a blank line before closing JSDoc
        startLines: 1, // Require exactly one blank line before the first tag
      },
    ],
  } satisfies Rules;
};
