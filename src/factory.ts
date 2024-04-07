import { type Linter } from "eslint";
import eslintConfigPrettier from "eslint-config-prettier";

import importsConfig from "./configs/imports";
import jestConfig from "./configs/jest";
import reactConfig from "./configs/react";
import typescriptConfig from "./configs/typescript";
import vitestConfig from "./configs/vitest";
import { GLOB_IGNORES } from "./constants";
import { baseRules } from "./rules/base";

interface Options {
  /**
   * Are TypeScript rules are enabled?
   * @default false
   */
  typescript?: boolean;
  /**
   * Are React rules are enabled?
   * @default false
   */
  react?: boolean;
  /**
   * Are imports rules are enabled?
   * @default true
   */
  imports?: boolean;
  /**
   * Are Jest rules are enabled?
   * @default false
   */
  jest?: boolean;
  /**
   * Are Vitest rules are enabled?
   * @default false
   */
  vitest?: boolean;
  /**
   * Are Testing Library rules are enabled?
   * @default false
   */
  testingLibrary?: boolean;
  /**
   * Additional flat configs to either extend or overrides configurations
   * @default []
   */
  overrides?: Linter.FlatConfig[];
}

export const jimmyDotCodes = ({
  typescript = false,
  react = false,
  imports = true,
  jest = false,
  vitest = false,
  testingLibrary = false,
  overrides = [],
}: Options = {}) => {
  return [
    { name: "jimmy.codes/base", rules: baseRules },
    ...(imports ? importsConfig({ typescript }) : []),
    ...(typescript ? typescriptConfig() : []),
    ...(react ? reactConfig() : []),
    ...(jest ? jestConfig({ testingLibrary, react }) : []),
    ...(vitest ? vitestConfig({ testingLibrary, react }) : []),
    { name: "jimmy.codes/disabled", ...eslintConfigPrettier },
    {
      ignores: GLOB_IGNORES,
    },
    ...overrides,
  ];
};
