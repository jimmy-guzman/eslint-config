import type { Rules } from "../types";

export const stylisticRules = {
  "@stylistic/jsx-curly-brace-presence": ["error", "never"],
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
    {
      blankLine: "any",
      next: "const",
      prev: "const",
    },
    {
      blankLine: "any",
      next: "let",
      prev: "let",
    },
    {
      blankLine: "any",
      next: "var",
      prev: "var",
    },
    {
      blankLine: "always",
      next: ["let", "var"],
      prev: "const",
    },
    {
      blankLine: "always",
      next: ["const", "var"],
      prev: "let",
    },
    {
      blankLine: "always",
      next: ["const", "let"],
      prev: "var",
    },
    {
      blankLine: "always",
      next: "if",
      prev: "if",
    },
  ],
} satisfies Rules;
