import jsdocPlugin from "eslint-plugin-jsdoc";

import type { TypedConfigItem } from "../types";

import { jsdocRules } from "../rules/jsdoc";

export const jsdocConfig = () => {
  return [
    {
      ...jsdocPlugin.configs["flat/recommended-typescript-error"],
      name: "jimmy.codes/jsdoc",
      rules: jsdocRules(),
    },
  ] satisfies TypedConfigItem[];
};
