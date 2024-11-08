import importX from "eslint-plugin-import-x";
import nodePlugin from "eslint-plugin-n";

import type { TypedConfigItem, TypescriptOptions } from "../types";

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
      name: "jimmy.codes/imports",
      plugins: {
        "import-x": importX,
        "n": nodePlugin,
      },
      rules: importsRules,
    },
    ...(typescript ? [typescriptImports] : []),
  ] satisfies TypedConfigItem[];
};
