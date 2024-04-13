import * as jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";

import { type Rules } from "../types";

export const testingLibraryRules = {
  ...testingLibrary.configs.react.rules,
  ...jestDom.configs["flat/recommended"].rules,
} satisfies Rules;
