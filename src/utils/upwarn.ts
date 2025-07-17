import type { Linter } from "eslint";

/**
 * Converts all ESLint rules set to `"warn"` into `"error"`.
 *
 * @param rules - A partial set of ESLint rules.
 *
 * @returns A new rules object with all `"warn"` values changed to `"error"`.
 */
export const upwarn = (rules: Partial<Linter.RulesRecord> = {}) => {
  return Object.fromEntries(
    Object.entries(rules).map(([rule, option]) => {
      return [rule, option === "warn" ? "error" : option];
    }),
  );
};
