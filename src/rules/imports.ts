import { type Linter } from "eslint";
import importX from "eslint-plugin-import-x";

export const importsRules = {
  ...importX.configs.recommended.rules,
  "import-x/first": "error",
  // ! can't get this rule to work
  "import-x/namespace": "off",
  "import-x/newline-after-import": "error",
  "import-x/no-absolute-path": "error",
  "import-x/no-empty-named-blocks": "error",
  "import-x/no-self-import": "error",
  "import-x/no-useless-path-segments": "error",
  "node-import/prefer-node-protocol": "error",
} satisfies Linter.RulesRecord;
