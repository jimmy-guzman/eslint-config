import eslintConfigPrettier from "eslint-config-prettier";

import { commonjsConfig } from "./configs/commonjs";
import importsConfig from "./configs/imports";
import reactConfig from "./configs/react";
import testingConfig from "./configs/testing";
import typescriptConfig from "./configs/typescript";
import { GLOB_IGNORES } from "./constants";
import { hasReact, hasTesting, hasTypescript } from "./has-dep";
import { baseRules } from "./rules/base";
import { type Options } from "./types";
import {
  getReactOptions,
  getTestingOptions,
  getTypescriptOptions,
} from "./utils";

export const jimmyDotCodes = ({
  typescript = false,
  react = false,
  testing = false,
  overrides = [],
  autoDetect = false,
}: Options = {}) => {
  const isTypescriptEnabled = typescript || (autoDetect && hasTypescript());
  const isReactEnabled = react || (autoDetect && hasReact());
  const isTestingEnabled = testing || (autoDetect && hasTesting());

  return [
    { name: "jimmy.codes/base", rules: baseRules },
    ...importsConfig({ typescript: isTypescriptEnabled }),
    ...(isTypescriptEnabled
      ? typescriptConfig(getTypescriptOptions(typescript))
      : []),
    ...(isReactEnabled ? reactConfig(getReactOptions(react), autoDetect) : []),
    ...(isTestingEnabled
      ? testingConfig(getTestingOptions(testing), autoDetect)
      : []),
    { name: "jimmy.codes/disabled", ...eslintConfigPrettier },
    ...commonjsConfig(),
    {
      ignores: GLOB_IGNORES,
    },
    ...overrides,
  ];
};
