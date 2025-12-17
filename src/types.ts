import type { Linter } from "eslint";

import type { RuleOptions } from "./rules.gen";

type Base = Linter.Config<Linter.RulesRecord & Rules>;
type ExtractPrefix<T> = T extends `${infer Prefix}/${infer Rest}`
  ? Rest extends `${string}/${string}`
    ? `${Prefix}/${ExtractPrefix<Rest>}`
    : Prefix
  : never;
type MaybeReadonly<T> = Readonly<T> | T;
type Override<T, R> = Omit<T, keyof R> & R;
type Prettify<T> = { [K in keyof T]: T[K] } & {};
type RulesWithPrefix<T, Prefix extends ValidPrefixes<T>> = {
  [K in keyof T as K extends `${Prefix}${string}` ? K : never]: T[K];
};
type ValidPrefixes<T> = ExtractPrefix<keyof T>;

interface LinterConfigOverrides {
  files?: MaybeReadonly<Base["files"]>;
  ignores?: MaybeReadonly<Base["ignores"]>;
  plugins?: Record<string, unknown>;
}

export type Rules = RuleOptions;

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
   * Additional rules to override Vitest defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "vitest">;
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
  /**
   * Additional rules to override TypeScript defaults.
   */
  overrides?: RulesWithPrefix<
    RuleOptions,
    "@typescript-eslint" | "erasable-syntax-only"
  >;
}

export interface AstroOptions {
  /**
   * Additional rules to override Astro defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "astro" | "jsx-a11y">;
}

export interface JestOptions {
  /**
   * Additional rules to override Jest defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "jest">;
}

export interface NextJSOptions {
  /**
   * Additional rules to override Next.js defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "@next/next">;
}

export interface PlaywrightOptions {
  /**
   * Additional rules to override Playwright defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "playwright">;
}

export interface ReactOptions {
  /**
   * Additional rules to override React defaults.
   */
  overrides?: RulesWithPrefix<
    RuleOptions,
    | "jsx-a11y"
    | "react-compiler"
    | "react-dom"
    | "react-hooks"
    | "react-hooks-extra"
    | "react-naming-convention"
    | "react-refresh"
    | "react-web-api"
    | "react-x"
  >;
}

export interface StorybookOptions {
  /**
   * Additional rules to override Storybook defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "storybook">;
}

export interface TanstackQueryOptions {
  /**
   * Additional rules to override TanStack Query defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "@tanstack/query">;
}

export interface TestingLibraryOptions {
  /**
   * Additional rules to override Testing Library defaults.
   */
  overrides?: RulesWithPrefix<RuleOptions, "jest-dom" | "testing-library">;
}

export interface Options {
  /**
   * Are Astro rules enabled?
   *
   * Pass `true` to enable with defaults, or an `AstroOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  astro?: AstroOptions | boolean;
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
   * Pass `true` to enable with defaults, or an `JestOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  jest?: boolean | JestOptions;
  /**
   * Are Next.js rules enabled?
   *
   * Pass `true` to enable with defaults, or a `NextJSOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  nextjs?: boolean | NextJSOptions;
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
   * Pass `true` to enable with defaults, or a `PlaywrightOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  playwright?: boolean | PlaywrightOptions;
  /**
   * Are React rules enabled?
   *
   * Pass `true` to enable with defaults, or a `ReactOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  react?: boolean | ReactOptions;
  /**
   * Are Storybook rules enabled?
   *
   * Pass `true` to enable with defaults, or a `StorybookOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  storybook?: boolean | StorybookOptions;
  /**
   * Are TanStack Query rules enabled?
   *
   * Pass `true` to enable with defaults, or a `TanstackQueryOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  tanstackQuery?: boolean | TanstackQueryOptions;
  /**
   * Are Testing Library rules enabled?
   *
   * Pass `true` to enable with defaults, or a `TestingLibraryOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  testingLibrary?: boolean | TestingLibraryOptions;
  /**
   * Are TypeScript rules enabled?
   *
   * Pass `true` to enable with defaults, or a `TypeScriptOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  typescript?: boolean | TypeScriptOptions;
  /**
   * Are Vitest rules enabled?
   *
   * Pass `true` to enable with defaults, or a `VitestOptions` object
   * to enable and customize overrides.
   *
   * @default false
   */
  vitest?: boolean | VitestOptions;
}
