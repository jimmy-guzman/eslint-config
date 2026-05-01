import type { Linter } from "eslint";

/**
 * Renames the prefix of ESLint rule keys.
 *
 * @param rules - A partial set of ESLint rules.
 *
 * @param from - The current rule prefix to replace (without trailing slash).
 *
 * @param to - The new rule prefix (without trailing slash).
 *
 * @returns A new rules object with matching prefixes renamed.
 */
export const rebrand = (
  rules: Partial<Linter.RulesRecord> = {},
  from: string,
  to: string,
) => {
  return Object.fromEntries(
    Object.entries(rules).map(([rule, option]) => {
      return [
        rule.startsWith(`${from}/`) ? rule.replace(`${from}/`, `${to}/`) : rule,
        option,
      ];
    }),
  );
};
