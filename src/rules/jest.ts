import { type Linter } from "eslint";
import jest from "eslint-plugin-jest";

export const jestRules = {
  ...jest.configs["flat/recommended"].rules,
  ...jest.configs["flat/style"].rules,
  "jest/no-alias-methods": "error",
  "jest/no-commented-out-tests": "error",
  "jest/consistent-test-it": [
    "error",
    {
      fn: "test",
      withinDescribe: "it",
    },
  ],
  "jest/no-conditional-in-test": "error",
  "jest/no-confusing-set-timeout": "error",
  "jest/no-duplicate-hooks": "error",
  "jest/no-hooks": "off",
  "jest/no-large-snapshots": "off",
  "jest/no-restricted-jest-methods": "off",
  "jest/no-restricted-matchers": "off",
  "jest/no-test-return-statement": "error",
  "jest/no-untyped-mock-factory": "off", // requires typescript
  "jest/prefer-called-with": "error",
  "jest/prefer-comparison-matcher": "error",
  "jest/prefer-each": "error",
  "jest/prefer-equality-matcher": "error",
  "jest/prefer-expect-assertions": "off",
  "jest/prefer-expect-resolves": "error",
  "jest/prefer-hooks-in-order": "error",
  "jest/prefer-hooks-on-top": "error",
  "jest/prefer-lowercase-title": "off",
  "jest/prefer-mock-promise-shorthand": "error",
  "jest/prefer-snapshot-hint": "error",
  "jest/prefer-spy-on": "off",
  "jest/prefer-strict-equal": "error",
  "jest/prefer-todo": "warn",
  "jest/require-hook": "error",
  "jest/require-to-throw-message": "error",
  "jest/require-top-level-describe": "off",
  "jest/unbound-method": "off", // requires typescript
} satisfies Linter.RulesRecord;
