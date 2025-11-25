import type { Linter } from "eslint";

import gitignoreConfig from "eslint-config-flat-gitignore";

import type { Options, TypedConfigItem } from "./types";

import { commonjsConfig } from "./configs/commonjs";
import { eslintCommentsConfig } from "./configs/eslint-comments";
import { ignoresConfig } from "./configs/ignores";
import { importsConfig } from "./configs/imports";
import { javascriptConfig } from "./configs/javascript";
import { jsdocConfig } from "./configs/jsdoc";
import { nodeConfig } from "./configs/node";
import { perfectionistConfig } from "./configs/perfectionist";
import { prettierConfig } from "./configs/prettier";
import { regexpConfig } from "./configs/regexp";
import stylisticConfig from "./configs/stylistic";
import { unicornConfig } from "./configs/unicorn";
import { createFeatured } from "./utils/create-featured";
import {
  hasAstro,
  hasJest,
  hasNext,
  hasPlaywright,
  hasReact,
  hasReactQuery,
  hasStorybook,
  hasTestingLibrary,
  hasTypescript,
  hasVitest,
} from "./utils/has-dependency";
import { unwrap } from "./utils/unwrap";

/**
 * Generates an ESLint configuration based on the provided options.
 *
 * @returns The resolved ESLint configuration.
 *
 * @example
 * import { defineConfig } from "@jimmy.codes/eslint-config";
 *
 * export default defineConfig();
 */
export const defineConfig = async (
  {
    astro = false,
    autoDetect = true,
    gitignore = false,
    ignores = [],
    jest = false,
    nextjs = false,
    overrides = [],
    playwright = false,
    react = false,
    storybook = false,
    tanstackQuery = false,
    testingLibrary = false,
    typescript = false,
    vitest = false,
  }: Options = {},
  ...moreOverrides: Linter.Config[] | TypedConfigItem[]
) => {
  const featured = createFeatured(autoDetect);

  const isTypescriptEnabled = featured(typescript, hasTypescript);
  const isReactEnabled = featured(react, hasReact);
  const isAstroEnabled = featured(astro, hasAstro);
  const isTanstackQueryEnabled = featured(tanstackQuery, hasReactQuery);
  const isTestingLibraryEnabled = featured(testingLibrary, hasTestingLibrary);
  const isPlaywrightEnabled = featured(playwright, hasPlaywright);
  const isStorybookEnabled = featured(storybook, hasStorybook);
  const isNextjsEnabled = featured(nextjs, hasNext);
  const isJestEnabled = featured(jest, hasJest);
  const isVitestEnabled = featured(vitest, hasVitest);

  const baseConfigs = [
    javascriptConfig(),
    perfectionistConfig(),
    nodeConfig(),
    unicornConfig(),
    eslintCommentsConfig(),
    regexpConfig(),
    jsdocConfig(),
    importsConfig({ isTypescriptEnabled }),
    stylisticConfig(),
  ];

  const featureConfigs = await Promise.all([
    isTypescriptEnabled && unwrap(import("./configs/typescript")),
    isReactEnabled && unwrap(import("./configs/react")),
    isTanstackQueryEnabled && unwrap(import("./configs/tanstack-query")),
    isAstroEnabled && unwrap(import("./configs/astro")),
    isJestEnabled && unwrap(import("./configs/jest")),
    isVitestEnabled && unwrap(import("./configs/vitest"), vitest),
    isTestingLibraryEnabled && unwrap(import("./configs/testing-library")),
    isPlaywrightEnabled && unwrap(import("./configs/playwright")),
    isStorybookEnabled && unwrap(import("./configs/storybook")),
    isNextjsEnabled && unwrap(import("./configs/nextjs")),
  ]);

  return [
    ...(gitignore ? [gitignoreConfig({ strict: false })] : []),
    ignoresConfig(ignores),
    ...baseConfigs,
    ...featureConfigs.filter(Boolean),
    commonjsConfig(),
    prettierConfig(),
    overrides,
    moreOverrides,
  ].flat();
};
