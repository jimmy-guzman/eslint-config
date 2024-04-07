import importX from "eslint-plugin-import-x";
import nodeImport from "eslint-plugin-node-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

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
  typescript?: boolean;
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
      rules: {
        ...importX.configs.recommended.rules,
        // ! can't get this rule to work
        "import-x/namespace": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "node-import/prefer-node-protocol": "error",
      },
    },
    ...(typescript ? [typescriptImports] : []),
  ];
};

export default importsConfig;
