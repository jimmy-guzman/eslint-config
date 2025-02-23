import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import nodePlugin from "eslint-plugin-n";

import type { TypedConfigItem, TypescriptOptions } from "../types";

import { importsRules } from "../rules/imports";

const importsTypescriptConfig = () => {
  const { rules, settings } = importX.configs.typescript;
  const { createNodeResolver } = importX;

  return [
    {
      name: "jimmy.codes/imports/typescript",
      rules,
      settings: {
        "import-x/extensions": settings["import-x/extensions"],
        "import-x/external-module-folders":
          settings["import-x/external-module-folders"],
        "import-x/parsers": settings["import-x/parsers"],
        "import-x/resolver-next": [
          createNodeResolver(),
          createTypeScriptImportResolver({
            alwaysTryTypes: true,
          }),
        ],
      },
    },
  ];
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
    ...(typescript ? importsTypescriptConfig() : []),
  ] as const satisfies TypedConfigItem[];
};
