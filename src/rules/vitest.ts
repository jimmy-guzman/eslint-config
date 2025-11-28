import type { Rules, VitestOptions } from "../types";

import { interopDefault } from "../utils/interop-default";

export const vitestRules = async (options?: VitestOptions) => {
  const vitestPlugin = await interopDefault(import("@vitest/eslint-plugin"));

  return {
    ...vitestPlugin.configs.recommended.rules,
    "vitest/consistent-each-for": [
      "error",
      {
        describe: "each",
        it: "each",
        suite: "each",
        test: "each",
      },
    ],
    "vitest/consistent-test-it": [
      "error",
      {
        fn: "test",
        withinDescribe: "it",
      },
    ],
    "vitest/consistent-vitest-vi": "error",
    "vitest/hoisted-apis-on-top": "error",
    "vitest/no-alias-methods": "error",
    "vitest/no-conditional-in-test": "error",
    "vitest/no-duplicate-hooks": "error",
    "vitest/no-hooks": "off",
    "vitest/no-importing-vitest-globals":
      options?.globals === "implicit" ? "error" : "off",
    "vitest/no-large-snapshots": "off",
    "vitest/no-restricted-matchers": "off",
    "vitest/no-restricted-vi-methods": "off",
    "vitest/no-test-prefixes": "error",
    "vitest/no-test-return-statement": "error",
    "vitest/padding-around-all": "error",
    "vitest/prefer-called-once": "error",
    "vitest/prefer-called-times": "off",
    // "vitest/no-untyped-mock-factory": "off", // requires typescript
    "vitest/prefer-called-with": "error",
    "vitest/prefer-comparison-matcher": "error",
    "vitest/prefer-describe-function-title": "off", // blocked by https://github.com/vitest-dev/eslint-plugin-vitest/issues/692
    "vitest/prefer-each": "error",
    "vitest/prefer-equality-matcher": "error",
    "vitest/prefer-expect-assertions": "off",
    "vitest/prefer-expect-resolves": "error",
    "vitest/prefer-expect-type-of": "error",
    "vitest/prefer-hooks-in-order": "error",
    "vitest/prefer-hooks-on-top": "error",
    "vitest/prefer-importing-vitest-globals":
      options?.globals === "explicit" ? "error" : "off",
    "vitest/prefer-lowercase-title": "off",
    "vitest/prefer-mock-promise-shorthand": "error",
    "vitest/prefer-snapshot-hint": "error",
    "vitest/prefer-spy-on": "off",
    "vitest/prefer-strict-boolean-matchers": "error",
    "vitest/prefer-strict-equal": "error",
    "vitest/prefer-to-be": "error",
    "vitest/prefer-to-contain": "error",
    "vitest/prefer-to-have-length": "error",
    "vitest/prefer-todo": "warn",
    "vitest/prefer-vi-mocked": "error",
    "vitest/require-awaited-expect-poll": "error",
    "vitest/require-hook": "error",
    "vitest/require-to-throw-message": "error",
    "vitest/require-top-level-describe": "off",
    // "vitest/unbound-method": "off", // requires typescript, missing https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md
    "vitest/valid-title": [
      "error",
      {
        mustMatch: {
          it: "^should",
        },
      },
    ],
    "vitest/warn-todo": "warn",
    ...options?.overrides,
  } satisfies Rules;
};
