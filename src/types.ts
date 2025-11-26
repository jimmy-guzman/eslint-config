import type { Linter } from "eslint";

import type { RuleOptions } from "./rules.gen";

export type Rules = RuleOptions;

type Base = Linter.Config<Linter.RulesRecord & Rules>;
type MaybeReadonly<T> = Readonly<T> | T;
type Override<T, R> = Omit<T, keyof R> & R;
type Prettify<T> = { [K in keyof T]: T[K] } & {};

interface LinterConfigOverrides {
  files?: MaybeReadonly<Base["files"]>;
  ignores?: MaybeReadonly<Base["ignores"]>;
  plugins?: Record<string, unknown>;
}

export type TypedConfigItem = Prettify<Override<Base, LinterConfigOverrides>>;

export interface VitestOptions {
  /**
   * How to handle [Vitest global APIs](https://vitest.dev/config/globals.html).
   *
   * - 'explicit': Require explicit imports from 'vitest'
   * - 'implicit': Use implicit global APIs (vitest config globals: true)
   * - 'either': Allow both styles (default)
   *
   * @default 'either'
   */
  globals?: "either" | "explicit" | "implicit";
  /**
   * Indicate whether [Vitest's type testing utilities](https://vitest.dev/guide/testing-types.html) are being used.
   *
   * @default false
   */
  typecheck?: boolean;
}

export interface TypeScriptOptions {
  /**
   * Enable rules for [erasable syntax only](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/#the---erasablesyntaxonly-option).
   *
   * @default false
   */
  erasableSyntaxOnly?: boolean;
}

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
   * Respect `.gitignore` files as ignore patterns.
   *
   * @default false
   */
  gitignore?: boolean;
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
  typescript?: boolean | TypeScriptOptions;
  /**
   * Are Vitest rules enabled?
   *
   * @default false
   */
  vitest?: boolean | VitestOptions;
}
