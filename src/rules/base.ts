import eslint from "@eslint/js";

import type { Rules } from "../types";

export const baseRules = {
  ...eslint.configs.recommended.rules,
  "arrow-body-style": ["error", "always"],
  "curly": ["error", "multi-or-nest", "consistent"],
  "no-console": "warn",
  "no-useless-rename": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
} satisfies Rules;
