import type { Rules } from "../types";

export const stylisticRules = {
  "@stylistic/object-curly-newline": [
    "error",
    {
      consistent: true,
      multiline: true,
    },
  ],
  "@stylistic/object-property-newline": [
    "error",
    { allowAllPropertiesOnSameLine: true },
  ],
  "@stylistic/padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      next: "return",
      prev: "*",
    },
    {
      blankLine: "always",
      next: "*",
      prev: ["const", "let", "var"],
    },
    {
      blankLine: "any",
      next: ["const", "let", "var"],
      prev: ["const", "let", "var"],
    },
    {
      blankLine: "always",
      next: "*",
      prev: "directive",
    },
    {
      blankLine: "any",
      next: "directive",
      prev: "directive",
    },
    {
      blankLine: "always",
      next: "function",
      prev: "*",
    },
  ],
} satisfies Rules;
