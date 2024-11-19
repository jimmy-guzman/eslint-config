import perfectionist from "eslint-plugin-perfectionist";

import type { Rules } from "../types";

export const perfectionistRules = {
  ...perfectionist.configs["recommended-natural"].rules,
  "perfectionist/sort-imports": [
    "error",
    {
      customGroups: { type: {}, value: {} },
      environment: "node",
      groups: [
        "side-effect-style",
        "builtin",
        "type",
        "external",
        "internal-type",
        "internal",
        ["parent-type", "sibling-type", "index-type"],
        ["parent", "sibling", "index"],
        "object",
        "style",
        "unknown",
      ],
      internalPattern: ["^~/.*", "^@/.*"],
      order: "asc",
      type: "natural",
    },
  ],
  // TODO: [>=4.0.0] enable perfectionist/sort-modules
  // "perfectionist/sort-modules": [
  //    "error",
  //    {
  //      customGroups: [],
  //      groups: [
  //        "declare-enum",
  //        "enum",
  //        "export-enum",
  //        ["declare-interface", "declare-type"],
  //        ["interface", "type"],
  //        ["export-interface", "export-type"],
  //        "declare-class",
  //        "class",
  //        "export-class",
  //        "declare-function",
  //        "function",
  //        "export-function",
  //      ],
  //      ignoreCase: true,
  //      newlinesBetween: "ignore",
  //      order: "asc",
  //      partitionByComment: false,
  //      partitionByNewLine: false,
  //      specialCharacters: "keep",
  //      type: "natural",
  //    },
  //  ],
  "perfectionist/sort-modules": "off",
} satisfies Rules;
