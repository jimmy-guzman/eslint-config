import * as parserAstro from "astro-eslint-parser";
import pluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import { configs, parser as parserTs } from "typescript-eslint";

import { GLOB_ASTRO } from "../constants";

export const astroConfig = () => {
  const files = [GLOB_ASTRO];

  return [
    {
      files,
      name: "jimmy.codes/astro",
      plugins: {
        "astro": pluginAstro,
        "jsx-a11y": jsxA11y,
      },
      languageOptions: {
        globals: {
          ...globals.node,
          Astro: false,
          Fragment: false,
        },
        parser: parserAstro,
        sourceType: "module",
        parserOptions: {
          parser: parserTs,
          extraFileExtensions: [".astro"],
        },
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
        "astro/no-unused-define-vars-in-style": "error",
        "astro/valid-compile": "error",
        "astro/no-exports-from-components": "off",
      },
    },
    {
      files,
      ...configs.disableTypeChecked,
      name: "jimmy.codes/astro/disable-type-checked",
    },
    {
      settings: {
        "import-x/core-modules": ["astro:content"],
      },
      name: "jimmy.codes/astro/imports",
    },
  ];
};
