import type { TypeScriptOptions } from "../types";

import { GLOB_JS, GLOB_JSX, GLOB_TESTS } from "../globs";
import { typescriptRules } from "../rules/typescript";
import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";

export default async function typescriptConfig(
  options: boolean | TypeScriptOptions,
) {
  const { configs } = await import("typescript-eslint");
  const extractedOptions = extractOptions(options);

  return [
    ...configs.strictTypeChecked,
    ...configs.stylisticTypeChecked.filter((config) => {
      return config.name === "typescript-eslint/stylistic-type-checked";
    }),
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: process.cwd(),
        },
      },
      name: "jimmy.codes/typescript",
      rules: typescriptRules,
    },
    {
      files: [GLOB_JS, GLOB_JSX],
      ...configs.disableTypeChecked,
      languageOptions: {
        parserOptions: {
          program: null,
          project: false,
          projectService: false,
        },
      },
    },
    {
      files: GLOB_TESTS,
      name: "jimmy.codes/typescript/testing",
      rules: {
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
      },
    },
    ...(extractedOptions?.erasableSyntaxOnly
      ? [
          {
            name: "jimmy.codes/typescript/erasable-syntax-only",
            plugins: {
              "erasable-syntax-only": await interopDefault(
                import("eslint-plugin-erasable-syntax-only"),
              ),
            },
            rules: {
              "erasable-syntax-only/enums": "error",
              "erasable-syntax-only/import-aliases": "error",
              "erasable-syntax-only/namespaces": "error",
              "erasable-syntax-only/parameter-properties": "error",
            },
          },
        ]
      : []),
  ];
}
