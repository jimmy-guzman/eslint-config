import { configs } from "typescript-eslint";

import type { TypescriptOptions } from "../types";

import { GLOB_JS, GLOB_JSX, GLOB_TESTS } from "../constants";
import { typescriptRules } from "../rules/typescript";

export const typescriptConfig = (options?: TypescriptOptions) => {
  return [
    ...configs.strictTypeChecked,
    ...configs.stylisticTypeChecked.filter((config) => {
      return config.name === "typescript-eslint/stylistic-type-checked";
    }),
    {
      languageOptions: {
        parserOptions: {
          ...(options?.project
            ? { project: options.project }
            : { projectService: true }),
          tsconfigRootDir: process.cwd(),
        },
      },
      name: "jimmy.codes/typescript",
      rules: typescriptRules,
    },
    {
      files: [GLOB_JS, GLOB_JSX],
      ...configs.disableTypeChecked,
    },
    {
      files: GLOB_TESTS,
      name: "jimmy.codes/typescript/testing",
      rules: {
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
      },
    },
  ];
};
