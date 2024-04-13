import { type Linter } from "eslint";

import type { RuleOptions } from "./rules.gen";

export type Rules = RuleOptions;

export interface TypescriptOptions {
  /**
   * Location of `tsconfig.json` used for [type aware linting](https://typescript-eslint.io/getting-started/typed-linting)
   * @default "./tsconfig.json"
   */
  project: string | string[];
}

type TestingFrameworks = "vitest" | "jest";
type TestingUtilities = "testing-library";
type ReactUtilities = "@tanstack/query";

export interface TestingOptions {
  /**
   * Which testing framework are you using?
   * @default "vitest"
   */
  framework?: TestingFrameworks;
  /**
   * Enable additional rules for testing utilities such as:
   * - [Testing Library](https://testing-library.com)
   */
  utilities?: TestingUtilities[];
}

export interface ReactOptions {
  /**
   * Enable additional rules for utilities such as:
   * - [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
   */
  utilities?: ReactUtilities[];
}

export type FlatConfigItem = Omit<Linter.FlatConfig, "plugins"> & {
  name?: string;
  plugins?: Record<string, unknown>;
  rules?: Linter.RulesRecord & Rules;
};

export interface Options {
  /**
   * Are TypeScript rules are enabled?
   * @default false
   */
  typescript?: boolean | TypescriptOptions;
  /**
   * Are React rules are enabled?
   * @default false
   */
  react?: boolean | ReactOptions;
  /**
   * Are Jest rules are enabled?
   * @default false
   */
  /**
   * Are testing  rules are enabled?
   * @default false
   */
  testing?: boolean | TestingOptions;
  /**
   * Additional flat configs to either extend or overrides configurations
   * @default []
   */
  overrides?: FlatConfigItem[];
  /**
   * Is auto detection enabled?
   * @default false
   */
  autoDetect?: boolean;
}
