import type { Linter } from "eslint";

import type { Options, TypedConfigItem } from "./types";

import { astroConfig } from "./configs/astro";
import { commonjsConfig } from "./configs/commonjs";
import { eslintCommentsConfig } from "./configs/eslint-comments";
import { ignoresConfig } from "./configs/ignores";
import { importsConfig } from "./configs/imports";
import { javascriptConfig } from "./configs/javascript";
import { jestConfig } from "./configs/jest";
import { jsdocConfig } from "./configs/jsdoc";
import { nextjsConfig } from "./configs/nextjs";
import { nodeConfig } from "./configs/node";
import { perfectionistConfig } from "./configs/perfectionist";
import { playwrightConfig } from "./configs/playwright";
import { prettierConfig } from "./configs/prettier";
import { reactConfig } from "./configs/react";
import { regexpConfig } from "./configs/regexp";
import { storybookConfig } from "./configs/storybook";
import { tanstackQueryConfig } from "./configs/tanstack-query";
import { testingLibraryConfig } from "./configs/testing-library";
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import { vitestConfig } from "./configs/vitest";
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

/**
 * Generates an ESLint configuration based on the provided options.
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
  const resolveFlag = (explicit: boolean, detector: () => boolean) => {
    return explicit || (autoDetect && detector());
  };

  const isTypescriptEnabled = resolveFlag(typescript, hasTypescript);
  const isReactEnabled = resolveFlag(react, hasReact);
  const isAstroEnabled = resolveFlag(astro, hasAstro);
  const isTanstackQueryEnabled = resolveFlag(tanstackQuery, hasReactQuery);
  const isTestingLibraryEnabled = resolveFlag(
    testingLibrary,
    hasTestingLibrary,
  );
  const isPlaywrightEnabled = resolveFlag(playwright, hasPlaywright);
  const isStorybookEnabled = resolveFlag(storybook, hasStorybook);
  const isNextjsEnabled = resolveFlag(nextjs, hasNext);
  const isJestEnabled = resolveFlag(jest, hasJest);
  const isVitestEnabled = resolveFlag(vitest, hasVitest);

  const baseConfigs = [
    javascriptConfig(),
    perfectionistConfig(),
    nodeConfig(),
    unicornConfig(),
    eslintCommentsConfig(),
    regexpConfig(),
    jsdocConfig(),
    importsConfig({ typescript: isTypescriptEnabled }),
  ];

  const featureConfigs = [
    isTypescriptEnabled && typescriptConfig(),
    isReactEnabled && (await reactConfig()),
    isTanstackQueryEnabled && (await tanstackQueryConfig()),
    isAstroEnabled && (await astroConfig()),
    isJestEnabled && (await jestConfig()),
    isVitestEnabled && (await vitestConfig()),
    isTestingLibraryEnabled && (await testingLibraryConfig()),
    isPlaywrightEnabled && (await playwrightConfig()),
    isStorybookEnabled && (await storybookConfig()),
    isNextjsEnabled && (await nextjsConfig()),
  ].filter(Boolean);

  return [
    ...baseConfigs,
    ...featureConfigs,
    prettierConfig(),
    commonjsConfig(),
    ignoresConfig(ignores),
    overrides,
    moreOverrides,
  ].flat();
};
