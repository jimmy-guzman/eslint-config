import eslintPluginUnicorn from "eslint-plugin-unicorn";

import type { Rules } from "../types";

import { hasTypescript } from "../utils/has-dependency";

export const unicornRules = () => {
  const isUsingTypescript = hasTypescript();

  return {
    ...eslintPluginUnicorn.configs.recommended.rules,
    "unicorn/consistent-boolean-name": "off", // Opinionated naming, inconsistent with `prevent-abbreviations` being off
    "unicorn/consistent-class-member-order": "off", // Owned by `perfectionist/sort-classes`
    "unicorn/filename-case": "off",
    "unicorn/import-style": "off",
    "unicorn/name-replacements": "off", // Opinionated naming, inconsistent with `prevent-abbreviations` being off
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-anonymous-default-export": "error",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-null": "off",
    "unicorn/no-process-exit": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off",
    ...(isUsingTypescript && {
      "unicorn/no-this-outside-of-class": "off" as const, // `@typescript-eslint/no-invalid-this` (more permissive, type-aware)
      "unicorn/no-unnecessary-boolean-comparison": "off" as const, // `@typescript-eslint/no-unnecessary-boolean-literal-compare`
      "unicorn/no-useless-coercion": "off" as const, // `@typescript-eslint/no-unnecessary-type-conversion`
      "unicorn/no-useless-template-literals": "off" as const, // `@typescript-eslint/no-unnecessary-template-expression`
      "unicorn/require-array-sort-compare": "off" as const, // `@typescript-eslint/require-array-sort-compare`
    }),
  } satisfies Rules;
};
