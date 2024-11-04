import eslint from "@eslint/js";

import type { Rules } from "../types";

export const baseRules = {
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
  "no-useless-rename": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
} satisfies Rules;
