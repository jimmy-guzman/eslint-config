import type { Linter } from "eslint";

import type { Rules } from "../types";

import { interopDefault } from "../utils/interop-default";
import { upwarn } from "../utils/upwarn";

export const nextjsRules = async () => {
  const nextjsPlugin = await interopDefault(import("@next/eslint-plugin-next"));

  return upwarn(
    // @next/eslint-plugin-next types for each rule use string instead of Linter.RuleLevel,
    nextjsPlugin.configs.recommended.rules as Linter.RulesRecord,
  ) satisfies Rules;
};
