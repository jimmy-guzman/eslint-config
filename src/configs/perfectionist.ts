import perfectionist from "eslint-plugin-perfectionist";

import type { TypedConfigItem } from "../types";

import { perfectionistRules } from "../rules/perfectionist";

export const perfectionistConfig = (): TypedConfigItem[] => {
  return [
    {
      name: "jimmy.codes/perfectionist",
      plugins: {
        perfectionist,
      },
      rules: perfectionistRules,
    },
  ];
};
