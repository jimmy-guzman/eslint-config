import perfectionist from "eslint-plugin-perfectionist";

import { type Rules } from "../types";

export const perfectionistRules = {
  ...perfectionist.configs["recommended-natural"].rules,
  "perfectionist/sort-imports": [
    "error",
    {
      customGroups: { type: {}, value: {} },
      environment: "node",
      groups: [
        "builtin",
        "type",
        "external",
        "internal-type",
        "internal",
        ["parent-type", "sibling-type", "index-type"],
        ["parent", "sibling", "index"],
        "object",
        "unknown",
      ],
      internalPattern: ["~/**", "@/**"],
      order: "asc",
      type: "natural",
    },
  ],
} satisfies Rules;
