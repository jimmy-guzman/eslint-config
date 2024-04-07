import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

import importsConfig from "./configs/imports";
import jestConfig from "./configs/jest";
import reactConfig from "./configs/react";
import stylisticConfig from "./configs/stylistic";
import typescriptConfig from "./configs/typescript";
import vitestConfig from "./configs/vitest";
import { GLOB_IGNORES } from "./constants";

export interface Config {
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
   * Are stylistic rules are enabled?
   * @default true
   */
  stylistic?: boolean;
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
}

export default ({
  typescript = false,
  react = false,
  stylistic = true,
  imports = true,
  jest = false,
  vitest = false,
  testingLibrary = false,
}: Config = {}) => {
  return [
    { name: "jimmy.codes/base", ...eslint.configs.recommended },
    ...(stylistic ? stylisticConfig() : []),
    ...(imports ? importsConfig({ typescript }) : []),
    ...(typescript ? typescriptConfig() : []),
    ...(react ? reactConfig({ stylistic }) : []),
    ...(jest ? jestConfig({ stylistic, testingLibrary, react }) : []),
    ...(vitest ? vitestConfig({ stylistic, testingLibrary, react }) : []),
    { name: "jimmy.codes/disabled", ...eslintConfigPrettier },
    {
      ignores: GLOB_IGNORES,
    },
  ];
};
