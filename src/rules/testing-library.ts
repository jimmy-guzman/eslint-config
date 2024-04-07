import { type Linter } from "eslint";
import * as jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";

export const testingLibraryRules = {
  ...testingLibrary.configs.react.rules,
  ...jestDom.configs["flat/recommended"].rules,
} satisfies Linter.RulesRecord;
