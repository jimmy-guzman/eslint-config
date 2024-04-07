import eslint from "@eslint/js";
import { type Linter } from "eslint";

export const baseRules = {
  ...eslint.configs.recommended.rules,
  "curly": "error",
  "arrow-body-style": ["error", "always"],
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
} satisfies Linter.RulesRecord;
