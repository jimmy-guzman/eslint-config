import { config, configs } from "typescript-eslint";

import { GLOB_JS, GLOB_JSX } from "../constants";
import { type TypescriptOptions } from "../types";

const typescriptConfig = (options: TypescriptOptions) => {
  return config(
    ...configs.strictTypeChecked,
    {
      name: "jimmy.codes/typescript",
      extends: [...configs.strictTypeChecked, ...configs.stylisticTypeChecked],
      languageOptions: {
        parserOptions: {
          project: options.project,
          tsconfigRootDir: process.cwd(),
        },
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
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
