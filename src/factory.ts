import type { Linter } from "eslint";

import type { Options, TypedConfigItem } from "./types";

import { astroConfig } from "./configs/astro";
import { commonjsConfig } from "./configs/commonjs";
import { eslintCommentsConfig } from "./configs/eslint-comments";
import { ignoresConfig } from "./configs/ignores";
import { importsConfig } from "./configs/imports";
import { javascriptConfig } from "./configs/javascript";
import { nodeConfig } from "./configs/node";
import { perfectionistConfig } from "./configs/perfectionist";
import { prettierConfig } from "./configs/prettier";
import { reactConfig } from "./configs/react";
import { tanstackQuery } from "./configs/tanstack-query";
import { testingConfig } from "./configs/testing";
import { testingLibrary } from "./configs/testing-library";
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import {
  hasAstro,
  hasReact,
  hasReactQuery,
  hasTesting,
  hasTestingLibrary,
  hasTypescript,
} from "./has-dep";
import {
  includeTanstackQuery,
  includeTestingLibrary,
  testingOptions,
  typescriptOptions,
} from "./utils";

export const jimmyDotCodes = async (
  {
    astro = false,
    autoDetect = true,
    configs = [],
    ignores = [],
    react = false,
    testing = false,
    typescript = false,
  }: Options = {},
  ...moreConfigs: Linter.Config[] | TypedConfigItem[]
) => {
  const isTypescriptEnabled = typescript || (autoDetect && hasTypescript());
  const isReactEnabled = react || (autoDetect && hasReact());
  const isTestingEnabled = testing || (autoDetect && hasTesting());
  const isAstroEnabled = astro || (autoDetect && hasAstro());
  const isTanstackQueryEnabled =
    includeTanstackQuery(react) || (autoDetect && hasReactQuery());
  const isTestingLibraryEnabled =
    includeTestingLibrary(testing) || (autoDetect && hasTestingLibrary());

  return [
    javascriptConfig(),
    perfectionistConfig(),
    nodeConfig(),
    unicornConfig(),
    eslintCommentsConfig(),
    importsConfig({ typescript: isTypescriptEnabled }),
    isTypescriptEnabled ? typescriptConfig(typescriptOptions(typescript)) : [],
    isReactEnabled ? await reactConfig() : [],
    isTanstackQueryEnabled ? await tanstackQuery() : [],
    isAstroEnabled ? await astroConfig() : [],
    isTestingEnabled ? testingConfig(testingOptions(testing), autoDetect) : [],
    isTestingLibraryEnabled ? await testingLibrary() : [],
    prettierConfig(),
    commonjsConfig(),
    ignoresConfig(ignores),
    configs,
    moreConfigs,
  ].flat();
};
