import { config, configs } from "typescript-eslint";

import { GLOB_JS, GLOB_JSX } from "../constants";

interface TypescriptOptions {
  /**
   * @default "tsconfig.json"
   */
  tsconfigPath?: string;
}

const typescriptConfig = ({
  tsconfigPath = "tsconfig.json",
}: TypescriptOptions = {}) => {
  return config(
    {
      //@ts-expect-error name should be allowed or provided
      name: "jimmy.codes/typescript",
      extends: [
        ...configs.strictTypeChecked.map((config) => {
          return { name: "jimmy.codes/typescript", ...config };
        }),
        ...configs.stylisticTypeChecked.map((config) => {
          return { name: "jimmy.codes/typescript", ...config };
        }),
      ],
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
      },
    },
    {
      name: "jimmy.codes/typescript",
      languageOptions: {
        parserOptions: {
          project: tsconfigPath,
          tsconfigRootDir: process.cwd(),
        },
      },
    },
    {
      name: "jimmy.codes/typescript",
      files: [GLOB_JS, GLOB_JSX],
      ...configs.disableTypeChecked,
    },
  );
};

export default typescriptConfig;
