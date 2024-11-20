import * as regexpPlugin from "eslint-plugin-regexp";

import type { Rules } from "../types";

export const regexpRules = {
  ...regexpPlugin.configs["flat/recommended"].rules,
  "regexp/confusing-quantifier": "error",
  "regexp/no-empty-alternative": "error",
  "regexp/no-lazy-ends": "error",
  "regexp/no-potentially-useless-backreference": "error",
  "regexp/no-useless-flag": "error",
  "regexp/optimal-lookaround-quantifier": "error",
} satisfies Rules;
