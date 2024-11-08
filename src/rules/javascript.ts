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
  "no-useless-rename": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
} satisfies Rules;
