import globals from "globals";

import type { AstroOptions, TypedConfigItem } from "../types";

import { GLOB_ASTRO } from "../globs";
import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";

export default async function astroConfig(options: AstroOptions | boolean) {
  const extractedOptions = extractOptions(options);
  const files = [GLOB_ASTRO];

  const [tsPlugin, astroPlugin, astroParser, jsxA11yPlugin] = await Promise.all(
    [
      import("typescript-eslint"),
      import("eslint-plugin-astro"),
      import("astro-eslint-parser"),
      interopDefault(import("eslint-plugin-jsx-a11y")),
    ],
  );

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
          parser: tsPlugin.parser,
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
        "astro/no-unsafe-inline-scripts": "error",
        "astro/no-unused-define-vars-in-style": "error",
        "astro/valid-compile": "error",
        ...extractedOptions?.overrides,
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
      rules: tsPlugin.configs.disableTypeChecked.rules,
    },
    {
      name: "jimmy.codes/astro/imports",
      settings: {
        "import-x/core-modules": ["astro:content"],
      },
    },
  ] satisfies TypedConfigItem[];
}
