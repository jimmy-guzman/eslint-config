import { configs } from "eslint-plugin-perfectionist";

import type { Rules } from "../types";

export const perfectionistRules = {
  ...configs["recommended-natural"].rules,
  "perfectionist/sort-imports": [
    "error",
    {
      environment: "node",
      groups: [
        "side-effect-style",
        "side-effect",
        ["type-builtin", "type-external"],
        "value-builtin",
        "value-external",
        "type-internal",
        "value-internal",
        ["type-parent", "type-sibling", "type-index"],
        ["value-parent", "value-sibling", "value-index"],
        "style",
        "value-subpath",
        "ts-equals-import",
        "unknown",
      ],
      internalPattern: ["^~/.*", "^@/.*"],
      order: "asc",
      type: "natural",
    },
  ],
  "perfectionist/sort-modules": [
    "error",
    {
      groups: [
        "enum",
        ["declare-interface", "declare-type"],
        "type",
        "interface",
        "declare-class",
        "class",
        "declare-function",
        "function",
        "export-enum",
        ["export-interface", "export-type"],
        "export-class",
        "export-function",
        "unknown",
      ],
      order: "asc",
      partitionByNewLine: true,
      type: "natural",
    },
  ],
} satisfies Rules;
