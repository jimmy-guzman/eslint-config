import eslintPluginUnicorn from "eslint-plugin-unicorn";

import type { TypedConfigItem } from "../types";

import { unicornRules } from "../rules/unicorn";

const unicornConfig = () => {
  return [
    {
      ...eslintPluginUnicorn.configs["flat/recommended"],
      name: "jimmy.codes/unicorn",
      rules: unicornRules,
    },
  ] satisfies TypedConfigItem[];
};

export default unicornConfig;