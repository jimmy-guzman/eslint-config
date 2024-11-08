import type { ESLint } from "eslint";

import queryPlugin from "@tanstack/eslint-plugin-query";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import type { ReactOptions, TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { hasReactQuery } from "../has-dep";
import { reactRules } from "../rules/react";

export const reactConfig = (
  { utilities = [] }: ReactOptions = {},
  autoDetect = true,
) => {
  const includeReactQuery =
    utilities.includes("@tanstack/query") || (autoDetect && hasReactQuery());

  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          jsxPragma: null,
        },
      },
      name: "jimmy.codes/react",
      plugins: {
        "jsx-a11y": jsxA11y,
        react,
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      rules: reactRules,
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    ...(includeReactQuery
      ? [
          {
            files: [GLOB_JSX, GLOB_TSX],
            name: "jimmy.codes/react/query",
            plugins: {
              // TODO: remove unknown conversion
              "@tanstack/query": queryPlugin as unknown as ESLint.Plugin,
            },
            rules: {
              "@tanstack/query/exhaustive-deps": "error",
              "@tanstack/query/no-rest-destructuring": "warn",
              "@tanstack/query/stable-query-client": "error",
            } as const,
          },
        ]
      : []),
  ] satisfies TypedConfigItem[];
};
