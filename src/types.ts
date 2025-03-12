import type { Linter } from "eslint";

import type { RuleOptions } from "./rules.gen";

export type Rules = RuleOptions;

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
   *
   * @default false
   */
  astro?: boolean;
  /**
   * Automatically enables rules based on installed dependencies.
   * For example, if `react` is installed, React-specific rules will be applied.
   *
   * @default true
   */
  autoDetect?: boolean;
  /**
   * Glob patterns for files that should be ignored.
   * Matches ESLint's ignore patterns.
   *
   * @see [Ignoring files](https://eslint.org/docs/latest/use/configure/ignore)
   */
  ignores?: string[];
  /**
   * Are Jest rules enabled?
   *
   * @default false
   */
  jest?: boolean;
  /**
   * Are Next.js rules enabled?
   *
   * @default false
   */
  nextjs?: boolean;
  /**
   * Additional configs to extend or override rules.
   * Accepts ESLint configuration objects.
   *
   * @default []
   */
  overrides?: Linter.Config[] | TypedConfigItem[];
  /**
   * Are playwright rules enabled?
   *
   * @default false
   */
  playwright?: boolean;
  /**
   * Are React rules enabled?
   *
   * @default false
   */
  react?: boolean;
  /**
   * Are Storybook rules enabled?
   *
   * @default false
   */
  storybook?: boolean;
  /**
   * Are TanStack Query rules enabled?
   *
   * @default false
   */
  tanstackQuery?: boolean;
  /**
   * Are Testing Library rules enabled?
   *
   * @default false
   */
  testingLibrary?: boolean;
  /**
   * Are TypeScript rules enabled?
   *
   * @default false
   */
  typescript?: boolean;
  /**
   * Are Vitest rules enabled?
   *
   * @default false
   */
  vitest?: boolean;
}
