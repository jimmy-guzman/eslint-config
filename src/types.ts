import { type Linter } from "eslint";

export interface TypescriptOptions {
  /**
   * Location of `tsconfig.json` used for [type aware linting](https://typescript-eslint.io/getting-started/typed-linting)
   * @default "./tsconfig.json"
   */
  project: string | string[];
}

type TestingFrameworks = "vitest" | "jest";
type TestingUtilities = "testing-library";

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
  /**
   * Are testing  rules are enabled?
   * @default false
   */
  testing?: boolean | TestingOptions;
  /**
   * Additional flat configs to either extend or overrides configurations
   * @default []
   */
  overrides?: Linter.FlatConfig[];
}
