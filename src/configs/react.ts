import * as reactQuery from "@tanstack/eslint-plugin-query";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import * as reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { reactRules } from "../rules/react";
import { type ReactOptions } from "../types";

const reactConfig = ({ utilities = [] }: ReactOptions = {}) => {
  return [
    {
      name: "jimmy.codes/react",
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        react,
        "react-hooks": reactHooks,
        "jsx-a11y": {
          rules: jsxA11y.rules,
        },
        "react-refresh": reactRefresh,
      },
      languageOptions: {
        parserOptions: {
          jsxPragma: null,
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          ...globals.browser,
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: reactRules,
    },
    ...(utilities.includes("@tanstack/query")
      ? [
          {
            name: "jimmy.codes/react/query",
            files: [GLOB_JSX, GLOB_TSX],
            plugins: {
              "@tanstack/query": reactQuery,
            },
            rules: {
              "@tanstack/query/exhaustive-deps": "error",
              "@tanstack/query/no-rest-destructuring": "warn",
              "@tanstack/query/stable-query-client": "error",
            },
          },
        ]
      : []),
  ];
};

export default reactConfig;
