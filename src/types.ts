import type { Linter } from "eslint";

import type { RuleOptions } from "./rules.gen";

export type Rules = RuleOptions;

/**
 * @deprecated
 */
export interface TypescriptOptions {
  /**
   * Location of `tsconfig.json` used for [type aware linting](https://typescript-eslint.io/getting-started/typed-linting)
   * @deprecated since this config uses `projectService` this is no longer needed and will be removed.
   */
  project: string | string[];
}

type TestingFrameworks = "jest" | "vitest";
type TestingUtilities = "testing-library";
type ReactUtilities = "@tanstack/query";

/**
 * @deprecated
 */
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

/**
 * @deprecated
 */

export interface ReactOptions {
  /**
   * Enable additional rules for utilities such as:
   * - [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
   */
  utilities?: ReactUtilities[];
}

export type TypedConfigItem = Omit<
  Linter.Config<Linter.RulesRecord & Rules>,
  "plugins"
> & {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  // TODO: add undefined
  plugins?: Record<string, unknown>;
};

export interface Options {
  /**
   * Are astro rules enabled?
   * @default false
   */
  astro?: boolean;
  /**
   * Is auto detection enabled?
   * @default true
   */
  autoDetect?: boolean;
  /**
   * Additional configs to either extend or overrides configurations
   * @default []
   */
  configs?: Linter.Config[] | TypedConfigItem[];
  /**
   * Glob patterns for files that should be ignored
   * @see [Ignoring files](https://eslint.org/docs/latest/use/configure/ignore)
   */
  ignores?: string[];
  /**
   * Are Jest rules enabled?
   * @default false
   */
  jest?: boolean;
  /**
   * Are playwright rules enabled?
   * @default false
   */
  playwright?: boolean;
  /**
   * Are React rules enabled?
   * @default false
   */
  react?: boolean | ReactOptions;
  /**
   * Are Storybook rules enabled?
   * @default false
   */
  storybook?: boolean;
  /**
   * Are Tanstack Query rules enabled?
   * @default false
   */
  tanstackQuery?: boolean;
  /**
   * Are testing rules enabled?
   * @default false
   * @deprecated please use {@link Options.jest}, {@link Options.vitest}, or {@link Options.testingLibrary} instead.
   */
  testing?: boolean | TestingOptions;
  /**
   * Are Testing Library rules enabled?
   * @default false
   */
  testingLibrary?: boolean;
  /**
   * Are TypeScript rules enabled?
   * @default false
   */
  typescript?: boolean | TypescriptOptions;
  /**
   * Are Vitest rules enabled?
   * @default false
   */
  vitest?: boolean;
}
