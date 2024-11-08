import eslint from "@eslint/js";

import type { Rules } from "../types";

export const javascriptRules = {
  ...eslint.configs.recommended.rules,
  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],
  "arrow-body-style": ["error", "always"],
  "curly": ["error", "all"],
  "no-console": "warn",
  "no-self-compare": "error",
  "no-template-curly-in-string": "error",
  "no-unmodified-loop-condition": "error",
  "no-unreachable-loop": "error",
  "no-use-before-define": [
    "error",
    {
      allowNamedExports: false,
      classes: false,
      functions: false,
      variables: true,
    },
  ],
  "no-useless-rename": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
} satisfies Rules;
