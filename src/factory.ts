import eslintConfigPrettier from "eslint-config-prettier";

import importsConfig from "./configs/imports";
import reactConfig from "./configs/react";
import testingConfig from "./configs/testing";
import typescriptConfig from "./configs/typescript";
import { GLOB_IGNORES } from "./constants";
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
}: Options = {}) => {
  return [
    { name: "jimmy.codes/base", rules: baseRules },
    ...importsConfig({ typescript }),
    ...(typescript ? typescriptConfig(getTypescriptOptions(typescript)) : []),
    ...(react ? reactConfig(getReactOptions(react)) : []),
    ...(testing ? testingConfig(getTestingOptions(testing)) : []),
    { name: "jimmy.codes/disabled", ...eslintConfigPrettier },
    {
      ignores: GLOB_IGNORES,
    },
    ...overrides,
  ];
};
