import { type Linter } from "eslint";
import importX from "eslint-plugin-import-x";

export const importsRules = {
  ...importX.configs.recommended.rules,
  // ! can't get this rule to work
  "import-x/namespace": "off",
  "import-x/newline-after-import": "error",
  "import-x/first": "error",
  "import-x/no-absolute-path": "error",
  "import-x/no-useless-path-segments": "error",
  "import-x/no-empty-named-blocks": "error",
  "import-x/no-self-import": "error",
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "node-import/prefer-node-protocol": "error",
} satisfies Linter.RulesRecord;
