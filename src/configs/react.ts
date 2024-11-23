import globals from "globals";

import type { TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { reactRules } from "../rules/react";
import { interopDefault } from "../utils/interop-default";

export const reactConfig = async () => {
  const [reactPlugin, jsxA11yPlugin, reactHooksPlugin, reactRefreshPlugin] =
    await Promise.all([
      interopDefault(import("eslint-plugin-react")),
      interopDefault(import("eslint-plugin-jsx-a11y")),
      import("eslint-plugin-react-hooks"),
      import("eslint-plugin-react-refresh"),
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
