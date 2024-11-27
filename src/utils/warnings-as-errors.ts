import type { Linter } from "eslint";

export const warningAsErrors = (rules: Partial<Linter.RulesRecord> = {}) => {
  return Object.fromEntries(
    Object.entries(rules).map(([rule, option]) => {
      return [rule, option === "warn" ? "error" : option];
    }),
  );
};
