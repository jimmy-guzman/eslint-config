import eslint from "@eslint/js";

import { type Rules } from "../types";

export const baseRules = {
  ...eslint.configs.recommended.rules,
  "curly": ["error", "multi-or-nest", "consistent"],
  "arrow-body-style": ["error", "always"],
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
  "no-console": "warn",
} satisfies Rules;
