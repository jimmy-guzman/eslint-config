import jsdocPlugin from "eslint-plugin-jsdoc";

import { jsdocRules } from "../rules/jsdoc";

export const jsdocConfig = () => {
  return [
    {
      ...jsdocPlugin.configs["flat/recommended-typescript-error"],
      name: "jimmy.codes/jsdoc",
      rules: jsdocRules(),
    },
  ];
};
