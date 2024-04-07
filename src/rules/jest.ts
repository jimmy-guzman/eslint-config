import { type Linter } from "eslint";
import jest from "eslint-plugin-jest";

export const jestRules = {
  ...jest.configs["flat/recommended"].rules,
  ...jest.configs["flat/style"].rules,
  "jest/consistent-test-it": [
    "error",
    {
      fn: "test",
      withinDescribe: "it",
    },
  ],
} satisfies Linter.RulesRecord;
