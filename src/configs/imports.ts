import type { ESLint, Linter } from "eslint";

import importX from "eslint-plugin-import-x";
import nodePlugin from "eslint-plugin-n";

import type { TypescriptOptions } from "../types";

import { importsRules } from "../rules/imports";

const typescriptImports = {
  name: "jimmy.codes/imports/typescript",
  rules: importX.configs.typescript.rules,
  settings: {
    ...importX.configs.typescript.settings,
    "import-x/resolver": {
      ...importX.configs.typescript.settings["import-x/resolver"],
      typescript: true,
    },
  },
};

interface ImportsConfigOptions {
  typescript?: boolean | TypescriptOptions;
}

export const importsConfig = ({
  typescript = false,
}: ImportsConfigOptions = {}) => {
  return [
    {
      languageOptions: {
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
      name: "jimmy.codes/imports",
      plugins: {
        // TODO: remove unknown conversion
        "import-x": importX as unknown as ESLint.Plugin,
        "n": nodePlugin,
      },
      rules: importsRules,
      // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
      settings: {
        "import-x/parsers": {
          espree: [".js", ".cjs", ".mjs", ".jsx"],
        },
      },
    },
    ...(typescript ? [typescriptImports] : []),
  ] satisfies Linter.Config[];
};
