import { configs } from "eslint-plugin-import-x";

import type { Rules } from "../types";

export const importsRules = {
  ...configs.recommended.rules,
  "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "import-x/extensions": [
    "error",
    "never",
    { checkTypedImports: true, svg: "always" },
  ],
  "import-x/first": "error",
  // ! can't get this rule to work
  "import-x/namespace": "off",
  "import-x/newline-after-import": "error",
  "import-x/no-absolute-path": "error",
  "import-x/no-duplicates": "error",
  "import-x/no-empty-named-blocks": "error",
  "import-x/no-named-as-default": "error",
  "import-x/no-named-as-default-member": "error",
  "import-x/no-self-import": "error",
  "import-x/no-unresolved": ["error", { ignore: [String.raw`\.svg$`] }],
  "import-x/no-useless-path-segments": "error",
} satisfies Rules;
