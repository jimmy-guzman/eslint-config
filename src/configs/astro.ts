import globals from "globals";

import type { TypedConfigItem } from "../types";

import { GLOB_ASTRO } from "../globs";
import { interopDefault } from "../utils/interop-default";

export default async function astroConfig() {
  const files = [GLOB_ASTRO];

  const { configs: tsConfigs, parser: tsParser } = await import(
    "typescript-eslint"
  );

  const [astroPlugin, astroParser, jsxA11yPlugin] = await Promise.all([
    import("eslint-plugin-astro"),
    import("astro-eslint-parser"),
    interopDefault(import("eslint-plugin-jsx-a11y")),
  ]);

  return [
    {
      files,
      languageOptions: {
        globals: {
          ...globals.node,
          Astro: false,
          Fragment: false,
        },
        parser: astroParser,
        parserOptions: {
          extraFileExtensions: [".astro"],
          parser: tsParser,
        },
        sourceType: "module",
      },
      name: "jimmy.codes/astro",
      plugins: {
        "astro": astroPlugin,
        "jsx-a11y": jsxA11yPlugin,
      },
      processor: "astro/client-side-ts",
      rules: {
        ...jsxA11yPlugin.configs.recommended.rules,
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
        parserOptions: {
          program: null,
          project: false,
          projectService: false,
        },
      },
      name: "jimmy.codes/astro/disable-type-checked",
      rules: tsConfigs.disableTypeChecked.rules,
    },
    {
      name: "jimmy.codes/astro/imports",
      settings: {
        "import-x/core-modules": ["astro:content"],
      },
    },
  ] satisfies TypedConfigItem[];
}
