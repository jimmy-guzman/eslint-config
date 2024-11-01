import eslintPluginUnicorn from "eslint-plugin-unicorn";

import type { Rules } from "../types";

export const unicornRules = {
  ...eslintPluginUnicorn.configs["flat/recommended"].rules,
  "unicorn/filename-case": "off",
  "unicorn/import-style": "off",
  "unicorn/no-abusive-eslint-disable": "off", // TODO [2024-12-31]: add https://eslint-community.github.io/eslint-plugin-eslint-comments
  "unicorn/no-anonymous-default-export": "off",
  "unicorn/no-array-callback-reference": "off", // TODO: enable when https://github.com/sindresorhus/eslint-plugin-unicorn/issues/781 is resolved.
  "unicorn/no-array-reduce": "off",
  "unicorn/no-null": "off",
  "unicorn/no-process-exit": "off",
  "unicorn/no-useless-undefined": [
    "error",
    { checkArguments: false, checkArrowFunctionBody: false },
  ],
  "unicorn/prefer-node-protocol": "off",
  "unicorn/prevent-abbreviations": "off",
} satisfies Rules;
