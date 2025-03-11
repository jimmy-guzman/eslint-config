import globals from "globals";

import type { TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { reactRules } from "../rules/react";
import { interopDefault } from "../utils/interop-default";

export const reactConfig = async () => {
  const [
    reactPlugin,
    jsxA11yPlugin,
    reactHooksPlugin,
    reactRefreshPlugin,
    reactCompilerPlugin,
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-react")),
    interopDefault(import("eslint-plugin-jsx-a11y")),
    import("eslint-plugin-react-hooks"),
    interopDefault(import("eslint-plugin-react-refresh")),
    import("eslint-plugin-react-compiler"),
  ]);

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
        "jsx-a11y": jsxA11yPlugin,
        "react": reactPlugin,
        "react-compiler": reactCompilerPlugin,
        "react-hooks": reactHooksPlugin,
        "react-refresh": reactRefreshPlugin,
      },
      rules: await reactRules(),
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ] satisfies TypedConfigItem[];
};
