import { config, configs } from "typescript-eslint";

import type { TypescriptOptions } from "../types";

import { GLOB_JS, GLOB_JSX } from "../constants";

const typescriptConfig = (options: TypescriptOptions) => {
  return config(
    ...configs.strictTypeChecked,
    ...configs.stylisticTypeChecked.filter((config) => {
      return config.name === "typescript-eslint/stylistic-type-checked";
    }),
    {
      languageOptions: {
        parserOptions: {
          project: options.project,
          tsconfigRootDir: process.cwd(),
        },
      },
      name: "jimmy.codes/typescript",
      rules: {
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
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          { allowNumber: true },
        ],
      },
    },
    {
      files: [GLOB_JS, GLOB_JSX],
      ...configs.disableTypeChecked,
    },
  );
};

export default typescriptConfig;
