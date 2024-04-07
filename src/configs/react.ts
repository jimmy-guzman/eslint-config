import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import { GLOB_JSX, GLOB_TSX } from "../constants";

const stylisticRules = {
  "react/self-closing-comp": "error",
  "react/jsx-curly-brace-presence": "error",
};

interface ReactConfigOptions {
  stylistic?: boolean;
}

const reactConfig = ({ stylistic = true }: ReactConfigOptions = {}) => {
  return [
    {
      name: "jimmy.codes/react/setup",
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
    },
    {
      name: "jimmy.codes/react/rules",
      files: [GLOB_JSX, GLOB_TSX],
      rules: {
        ...jsxA11y.configs.recommended.rules,

        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",

        "react/display-name": "error",
        "react/jsx-key": "error",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-vars": "error",
        "react/no-children-prop": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-render-return-value": "error",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "off",
        "react/prop-types": "error",
        "react/require-render-return": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",

        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],

        ...(stylistic && stylisticRules),
      },
    },
  ];
};

export default reactConfig;
