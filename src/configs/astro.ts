import * as parserAstro from "astro-eslint-parser";
import pluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import { configs, parser as parserTs } from "typescript-eslint";

import type { TypedConfigItem } from "../types";

import { GLOB_ASTRO } from "../constants";

export const astroConfig = () => {
  const files = [GLOB_ASTRO];

  return [
    {
      files,
      languageOptions: {
        globals: {
          ...globals.node,
          Astro: false,
          Fragment: false,
        },
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: [".astro"],
          parser: parserTs,
        },
        sourceType: "module",
      },
      name: "jimmy.codes/astro",
      plugins: {
        "astro": pluginAstro,
        "jsx-a11y": jsxA11y,
      },
      processor: "astro/client-side-ts",
      rules: {
        ...jsxA11y.configs.recommended.rules,
        "astro/missing-client-only-directive-value": "error",
        "astro/no-conflict-set-directives": "error",
        "astro/no-deprecated-astro-canonicalurl": "error",
        "astro/no-deprecated-astro-fetchcontent": "error",
        "astro/no-deprecated-astro-resolve": "error",
        "astro/no-deprecated-getentrybyslug": "error",
        "astro/no-exports-from-components": "off",
        "astro/no-unused-define-vars-in-style": "error",
        "astro/valid-compile": "error",
      },
    },
    {
      files,
      languageOptions: {
        parserOptions:
          configs.disableTypeChecked.languageOptions?.parserOptions,
      },
      name: "jimmy.codes/astro/disable-type-checked",
      rules: configs.disableTypeChecked.rules,
    },
    {
      name: "jimmy.codes/astro/imports",
      settings: {
        "import-x/core-modules": ["astro:content"],
      },
    },
  ] satisfies TypedConfigItem[];
};
