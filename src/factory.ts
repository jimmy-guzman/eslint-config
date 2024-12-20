import type { Linter } from "eslint";

import type { Options, TypedConfigItem } from "./types";

import { astroConfig } from "./configs/astro";
import { commonjsConfig } from "./configs/commonjs";
import { eslintCommentsConfig } from "./configs/eslint-comments";
import { ignoresConfig } from "./configs/ignores";
import { importsConfig } from "./configs/imports";
import { javascriptConfig } from "./configs/javascript";
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
import { testingConfig } from "./configs/testing";
import { testingLibraryConfig } from "./configs/testing-library";
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import {
  getReactOptions,
  getTestingOptions,
  getTypescriptOptions,
} from "./utils/get-options";
import {
  hasAstro,
  hasNext,
  hasPlaywright,
  hasReact,
  hasStorybook,
  hasTesting,
  hasTypescript,
} from "./utils/has-dependency";
import {
  shouldEnableTanstackQuery,
  shouldEnableTestingLibrary,
} from "./utils/should-enable";

export const eslintConfig = async (
  {
    astro = false,
    autoDetect = true,
    configs = [],
    ignores = [],
    jest = false,
    nextjs = false,
    overrides = [],
    playwright = false,
    react = false,
    storybook = false,
    tanstackQuery = false,
    testing = false,
    testingLibrary = false,
    typescript = false,
    vitest = false,
  }: Options = {},
  ...moreOverrides: Linter.Config[] | TypedConfigItem[]
) => {
  const reactOptions = getReactOptions(react);
  const testingOptions = getTestingOptions(testing, {
    jest,
    testingLibrary,
    vitest,
  });
  const typescriptOptions = getTypescriptOptions(typescript);
  const isTypescriptEnabled =
    typescript || !!typescriptOptions || (autoDetect && hasTypescript());
  const isReactEnabled = react || (autoDetect && hasReact());
  const isTestingEnabled =
    testing || jest || vitest || (autoDetect && hasTesting());
  const isAstroEnabled = astro || (autoDetect && hasAstro());
  const isTanstackQueryEnabled = shouldEnableTanstackQuery(
    reactOptions,
    tanstackQuery,
    autoDetect,
  );
  const isTestingLibraryEnabled = shouldEnableTestingLibrary(
    testingOptions,
    autoDetect,
  );
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
    jsdocConfig(),
    importsConfig({ typescript: isTypescriptEnabled }),
    isTypescriptEnabled ? typescriptConfig(typescriptOptions) : [],
    isReactEnabled ? await reactConfig() : [],
    isTanstackQueryEnabled ? await tanstackQueryConfig() : [],
    isAstroEnabled ? await astroConfig() : [],
    isTestingEnabled ? await testingConfig(testingOptions, autoDetect) : [],
    isTestingLibraryEnabled ? await testingLibraryConfig() : [],
    isPlaywrightEnabled ? await playwrightConfig() : [],
    isStorybookEnabled ? await storybookConfig() : [],
    isNextjsEnabled ? await nextjsConfig() : [],
    prettierConfig(),
    commonjsConfig(),
    ignoresConfig(ignores),
    configs,
    overrides,
    moreOverrides,
  ].flat();
};
