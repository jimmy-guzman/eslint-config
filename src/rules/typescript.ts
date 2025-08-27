import type { Rules } from "../types";

const disabledEslintRules = {
  "no-use-before-define": "off",
} satisfies Rules;

export const typescriptRules = {
  "@typescript-eslint/consistent-type-exports": [
    "error",
    { fixMixedExportsWithInlineTypeSpecifier: false },
  ],
  "@typescript-eslint/consistent-type-imports": [
    "error",
    { fixStyle: "separate-type-imports" },
  ],
  "@typescript-eslint/no-deprecated": "warn",
  "@typescript-eslint/no-misused-promises": [
    "error",
    { checksVoidReturn: { attributes: false } },
  ],
  "@typescript-eslint/no-unnecessary-type-conversion": "error",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      ignoreRestSiblings: true,
      varsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      allowNamedExports: false,
      classes: false,
      functions: false,
      variables: true,
    },
  ],
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    { allowNumber: true },
  ],
  "@typescript-eslint/switch-exhaustiveness-check": "error",
  ...disabledEslintRules,
} satisfies Rules;
