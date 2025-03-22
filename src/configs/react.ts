import globals from "globals";

import type { TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { reactRules } from "../rules/react";
import { interopDefault } from "../utils/interop-default";

export default async function reactConfig() {
  const [
    reactPlugin,
    jsxA11yPlugin,
    reactHooksPlugin,
    reactRefreshPlugin,
    reactCompilerPlugin,
  ] = await Promise.all([
    interopDefault(import("@eslint-react/eslint-plugin")),
    interopDefault(import("eslint-plugin-jsx-a11y")),
    import("eslint-plugin-react-hooks"),
    interopDefault(import("eslint-plugin-react-refresh")),
    import("eslint-plugin-react-compiler"),
  ]);

  const reactPlugins = reactPlugin.configs.all.plugins;

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
        "@eslint-react": reactPlugins["@eslint-react"],
        "@eslint-react/dom": reactPlugins["@eslint-react/dom"],
        "@eslint-react/hooks-extra": reactPlugins["@eslint-react/hooks-extra"],
        "@eslint-react/web-api": reactPlugins["@eslint-react/web-api"],
        "jsx-a11y": jsxA11yPlugin,
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
}
