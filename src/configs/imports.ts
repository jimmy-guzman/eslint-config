import { type ESLint, type Linter } from "eslint";
import importX from "eslint-plugin-import-x";
import nodeImport from "eslint-plugin-node-import";

import { importsRules } from "../rules/imports";
import { type TypescriptOptions } from "../types";

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

const importsConfig = ({ typescript = false }: ImportsConfigOptions = {}) => {
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
        "node-import": nodeImport,
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

export default importsConfig;
