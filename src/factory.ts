import type { Linter } from "eslint";

import type { Options, TypedConfigItem } from "./types";

import { astroConfig } from "./configs/astro";
import { commonjsConfig } from "./configs/commonjs";
import { eslintCommentsConfig } from "./configs/eslint-comments";
import { ignoresConfig } from "./configs/ignores";
import { importsConfig } from "./configs/imports";
import { javascriptConfig } from "./configs/javascript";
import { nextjsConfig } from "./configs/nextjs";
import { nodeConfig } from "./configs/node";
import { perfectionistConfig } from "./configs/perfectionist";
import { playwrightConfig } from "./configs/playwright";
import { prettierConfig } from "./configs/prettier";
import { reactConfig } from "./configs/react";
import { regexpConfig } from "./configs/regexp";
import { storybookConfig } from "./configs/storybook";
import { tanstackQueryConfig } from "./configs/tanstack-query";
import { testingConfig } from "./configs/testing";
import { testingLibraryConfig } from "./configs/testing-library";
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import {
  hasAstro,
  hasNext,
  hasPlaywright,
  hasReact,
  hasReactQuery,
  hasStorybook,
  hasTesting,
  hasTestingLibrary,
  hasTypescript,
} from "./utils/has-dependency";

export const eslintConfig = async (
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
  const isTypescriptEnabled = typescript || (autoDetect && hasTypescript());
  const isReactEnabled = react || (autoDetect && hasReact());
  const isTestingEnabled = jest || vitest || (autoDetect && hasTesting());
  const isAstroEnabled = astro || (autoDetect && hasAstro());
  const isTanstackQueryEnabled =
    tanstackQuery || (autoDetect && hasReactQuery());
  const isTestingLibraryEnabled =
    testingLibrary || (autoDetect && hasTestingLibrary());
  const isPlaywrightEnabled = playwright || (autoDetect && hasPlaywright());
  const isStorybookEnabled = storybook || (autoDetect && hasStorybook());
  const isNextjsEnabled = nextjs || (autoDetect && hasNext());

  return [
    javascriptConfig(),
    perfectionistConfig(),
    nodeConfig(),
    unicornConfig(),
    eslintCommentsConfig(),
    regexpConfig(),
    importsConfig({ typescript: isTypescriptEnabled }),
    isTypescriptEnabled ? typescriptConfig() : [],
    isReactEnabled ? await reactConfig() : [],
    isTanstackQueryEnabled ? await tanstackQueryConfig() : [],
    isAstroEnabled ? await astroConfig() : [],
    isTestingEnabled ? await testingConfig({ jest, vitest }, autoDetect) : [],
    isTestingLibraryEnabled ? await testingLibraryConfig() : [],
    isPlaywrightEnabled ? await playwrightConfig() : [],
    isStorybookEnabled ? await storybookConfig() : [],
    isNextjsEnabled ? await nextjsConfig() : [],
    prettierConfig(),
    commonjsConfig(),
    ignoresConfig(ignores),
    overrides,
    moreOverrides,
  ].flat();
};
