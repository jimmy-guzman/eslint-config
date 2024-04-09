import importX from "eslint-plugin-import-x";
import nodeImport from "eslint-plugin-node-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import { importsRules } from "../rules/imports";
import { type TypescriptOptions } from "../types";

const typescriptImports = {
  name: "jimmy.codes/imports/typescript",
  settings: {
    ...importX.configs.typescript.settings,
    "import-x/resolver": {
      ...importX.configs.typescript.settings["import-x/resolver"],
      typescript: true,
    },
  },
  rules: importX.configs.typescript.rules,
};

interface ImportsConfigOptions {
  typescript?: boolean | TypescriptOptions;
}

const importsConfig = ({ typescript = false }: ImportsConfigOptions = {}) => {
  return [
    {
      name: "jimmy.codes/imports",
      plugins: {
        "import-x": importX,
        "simple-import-sort": simpleImportSort,
        "node-import": nodeImport,
      },
      // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
      settings: {
        "import-x/parsers": {
          espree: [".js", ".cjs", ".mjs", ".jsx"],
        },
      },
      languageOptions: {
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
      rules: importsRules,
    },
    ...(typescript ? [typescriptImports] : []),
  ];
};

export default importsConfig;
