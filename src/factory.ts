import type { Linter } from "eslint";

import eslintConfigPrettier from "eslint-config-prettier";

import type { Options, TypedConfigItem } from "./types";

import { astroConfig } from "./configs/astro";
import { commonjsConfig } from "./configs/commonjs";
import eslintCommentsConfig from "./configs/eslint-comments";
import importsConfig from "./configs/imports";
import nodeConfig from "./configs/node";
import perfectionistConfig from "./configs/perfectionist";
import reactConfig from "./configs/react";
import testingConfig from "./configs/testing";
import typescriptConfig from "./configs/typescript";
import unicornConfig from "./configs/unicorn";
import { GLOB_IGNORES } from "./constants";
import { hasAstro, hasReact, hasTesting, hasTypescript } from "./has-dep";
import { baseRules } from "./rules/base";
import {
  getReactOptions,
  getTestingOptions,
  getTypescriptOptions,
} from "./utils";

export const jimmyDotCodes = (
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

  return [
    { name: "jimmy.codes/base", rules: baseRules },
    ...perfectionistConfig(),
    ...nodeConfig(),
    ...unicornConfig(),
    ...eslintCommentsConfig(),
    ...importsConfig({ typescript: isTypescriptEnabled }),
    ...(isTypescriptEnabled
      ? typescriptConfig(getTypescriptOptions(typescript))
      : []),
    ...(isReactEnabled ? reactConfig(getReactOptions(react), autoDetect) : []),
    ...(isAstroEnabled ? astroConfig() : []),
    ...(isTestingEnabled
      ? testingConfig(getTestingOptions(testing), autoDetect)
      : []),
    // TODO [2024-12-31]: rename to jimmy.codes/prettier.
    { name: "jimmy.codes/disabled", ...eslintConfigPrettier },
    ...commonjsConfig(),
    {
      ignores: [...GLOB_IGNORES, ...ignores],
      name: "jimmy.codes/ignores",
    },
    ...configs,
    ...moreConfigs,
  ];
};
