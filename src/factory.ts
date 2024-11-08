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
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import {
  hasAstro,
  hasReact,
  hasReactQuery,
  hasTesting,
  hasTypescript,
} from "./has-dep";
import { testingOptions, typescriptOptions } from "./utils";

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
  const isTanstackQueryRequested =
    typeof react === "object" &&
    Boolean(react.utilities?.includes("@tanstack/query"));
  const includeTanstackQuery =
    isTanstackQueryRequested || (autoDetect && hasReactQuery());

  return [
    javascriptConfig(),
    perfectionistConfig(),
    nodeConfig(),
    unicornConfig(),
    eslintCommentsConfig(),
    importsConfig({ typescript: isTypescriptEnabled }),
    isTypescriptEnabled ? typescriptConfig(typescriptOptions(typescript)) : [],
    isReactEnabled ? reactConfig() : [],
    includeTanstackQuery ? await tanstackQuery() : [],
    isAstroEnabled ? await astroConfig() : [],
    isTestingEnabled ? testingConfig(testingOptions(testing), autoDetect) : [],
    prettierConfig(),
    commonjsConfig(),
    ignoresConfig(ignores),
    configs,
    moreConfigs,
  ].flat();
};
