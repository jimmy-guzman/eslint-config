import globals from "globals";

import type { ReactOptions, TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../globs";
import { reactRules } from "../rules/react";
import { extractOptions } from "../utils/extract-options";
import { unwrapDefault } from "../utils/interop-default";

export default async function reactConfig(options: boolean | ReactOptions) {
  const extractedOptions = extractOptions(options);
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
    reactRscPlugin,
  ] = await Promise.all([
    unwrapDefault(import("eslint-plugin-react-x")),
    unwrapDefault(import("eslint-plugin-jsx-a11y")),
    unwrapDefault(import("eslint-plugin-react-hooks")),
    unwrapDefault(import("eslint-plugin-react-refresh")),
    unwrapDefault(import("eslint-plugin-react-compiler")),
    unwrapDefault(import("eslint-plugin-react-hooks-extra")),
    unwrapDefault(import("eslint-plugin-react-dom")),
    unwrapDefault(import("eslint-plugin-react-web-api")),
    unwrapDefault(import("eslint-plugin-react-naming-convention")),
    unwrapDefault(import("eslint-plugin-react-rsc")),
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
        "react-rsc": reactRscPlugin,
        "react-web-api": reactWebApiPlugin,
        "react-x": reactPlugin,
      },
      rules: await reactRules(extractedOptions),
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ] satisfies TypedConfigItem[];
}
