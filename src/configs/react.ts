import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { reactRules } from "../rules/react";

const reactConfig = () => {
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
      rules: reactRules,
    },
  ];
};

export default reactConfig;
