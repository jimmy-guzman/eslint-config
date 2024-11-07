import type { ESLint } from "eslint";

import perfectionist from "eslint-plugin-perfectionist";

import type { TypedConfigItem } from "../types";

import { perfectionistRules } from "../rules/perfectionist";

export const perfectionistConfig = () => {
  return [
    {
      name: "jimmy.codes/perfectionist",
      plugins: {
        // TODO: remove unknown conversion
        perfectionist: perfectionist as unknown as ESLint.Plugin,
      },
      rules: perfectionistRules,
    },
  ] satisfies TypedConfigItem[];
};
