import eslintPluginUnicorn from "eslint-plugin-unicorn";

import type { TypedConfigItem } from "../types";

import { unicornRules } from "../rules/unicorn";

export const unicornConfig = () => {
  return [
    {
      ...eslintPluginUnicorn.configs.recommended,
      name: "jimmy.codes/unicorn",
      rules: unicornRules,
    },
  ] satisfies TypedConfigItem[];
};
