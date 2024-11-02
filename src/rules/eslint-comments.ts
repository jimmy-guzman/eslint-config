import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

import type { Rules } from "../types";

export const eslintCommentsRules = {
  ...comments.recommended.rules,
  "@eslint-community/eslint-comments/require-description": "error",
} satisfies Rules;
