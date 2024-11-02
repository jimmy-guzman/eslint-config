import type { Linter } from "eslint";

const toStringSeverity = (option: Linter.Severity) => {
  return option === 2 ? "error" : option === 1 ? "warn" : "off";
};

export const normalizeRuleEntries = (rules: Linter.RulesRecord = {}) => {
  return Object.fromEntries(
    Object.entries(rules).map(([rule, option]) => {
      return [
        rule,
        typeof option === "number" ? toStringSeverity(option) : option,
      ];
    }),
  );
};
