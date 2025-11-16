import globals from "globals";

import type { TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../globs";
import { reactRules } from "../rules/react";
import { interopDefault } from "../utils/interop-default";

export default async function reactConfig(): Promise<TypedConfigItem[]> {
  const [
    reactPlugin,
    jsxA11yPlugin,
    reactHooksPlugin,
    reactRefreshPlugin,
    reactCompilerPlugin,
    reactHooksExtraPlugin,
    reactDomPlugin,
    reactWebApiPlugin,
    reactNamingConventionPlugin,
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-react-x")),
    interopDefault(import("eslint-plugin-jsx-a11y")),
    interopDefault(import("eslint-plugin-react-hooks")),
    interopDefault(import("eslint-plugin-react-refresh")),
    interopDefault(import("eslint-plugin-react-compiler")),
    interopDefault(import("eslint-plugin-react-hooks-extra")),
    interopDefault(import("eslint-plugin-react-dom")),
    interopDefault(import("eslint-plugin-react-web-api")),
    interopDefault(import("eslint-plugin-react-naming-convention")),
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
        "react-compiler": reactCompilerPlugin,
        "react-dom": reactDomPlugin,
        "react-hooks": reactHooksPlugin,
        "react-hooks-extra": reactHooksExtraPlugin,
        "react-naming-convention": reactNamingConventionPlugin,
        "react-refresh": reactRefreshPlugin,
        "react-web-api": reactWebApiPlugin,
        "react-x": reactPlugin,
      },
      rules: await reactRules(),
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ];
}
