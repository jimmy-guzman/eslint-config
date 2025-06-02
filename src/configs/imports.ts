import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { configs, importX } from "eslint-plugin-import-x";
import nodePlugin from "eslint-plugin-n";

import type { TypedConfigItem } from "../types";

import { importsRules } from "../rules/imports";

const importsTypescriptConfig = (): TypedConfigItem[] => {
  const { rules, settings } = configs.typescript;

  return [
    {
      name: "jimmy.codes/imports/typescript",
      rules,
      settings: {
        "import-x/extensions": settings["import-x/extensions"],
        "import-x/external-module-folders":
          settings["import-x/external-module-folders"],
        "import-x/parsers": settings["import-x/parsers"],
        "import-x/resolver-next": [createTypeScriptImportResolver()],
      },
    },
  ];
};

interface ImportsConfigOptions {
  isTypescriptEnabled?: boolean;
}

export const importsConfig = ({
  isTypescriptEnabled = false,
}: ImportsConfigOptions = {}): TypedConfigItem[] => {
  return [
    {
      name: "jimmy.codes/imports",
      plugins: {
        "import-x": importX,
        "n": nodePlugin,
      },
      rules: importsRules,
    },
    ...(isTypescriptEnabled ? importsTypescriptConfig() : []),
  ];
};
