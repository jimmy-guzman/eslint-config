import type { Rules } from "../types";

import { interopDefault } from "../utils/interop-default";

export const vitestRules = async () => {
  const vitestPlugin = await interopDefault(import("@vitest/eslint-plugin"));

  return {
    ...vitestPlugin.configs.recommended.rules,
    "vitest/consistent-test-it": [
      "error",
      {
        fn: "test",
        withinDescribe: "it",
      },
    ],
    "vitest/no-alias-methods": "error",
    "vitest/no-commented-out-tests": "error",
    "vitest/no-conditional-in-test": "error",
    // "vitest/no-confusing-set-timeout": "error", // missing
    // "vitest/no-deprecated-functions": "error",  // missing
    "vitest/no-disabled-tests": "warn",
    "vitest/no-duplicate-hooks": "error",
    // "vitest/no-export": "error", // missing
    "vitest/no-focused-tests": "error",
    "vitest/no-hooks": "off",
    "vitest/no-identical-title": "error",
    "vitest/no-interpolation-in-snapshots": "error",
    // "vitest/no-jasmine-globals": "error",  // missing
    "vitest/no-large-snapshots": "off",
    "vitest/no-mocks-import": "error",
    "vitest/no-restricted-matchers": "off",
    "vitest/no-restricted-vi-methods": "off",
    "vitest/no-standalone-expect": "error",
    "vitest/no-test-prefixes": "error",
    "vitest/no-test-return-statement": "error",
    // "vitest/no-untyped-mock-factory": "off", // requires typescript
    "vitest/prefer-called-with": "error",
    "vitest/prefer-comparison-matcher": "error",
    "vitest/prefer-each": "error",
    "vitest/prefer-equality-matcher": "error",
    "vitest/prefer-expect-assertions": "off",
    "vitest/prefer-expect-resolves": "error",
    "vitest/prefer-hooks-in-order": "error",
    "vitest/prefer-hooks-on-top": "error",
    "vitest/prefer-lowercase-title": "off",
    "vitest/prefer-mock-promise-shorthand": "error",
    "vitest/prefer-snapshot-hint": "error",
    "vitest/prefer-spy-on": "off",
    "vitest/prefer-strict-equal": "error",
    "vitest/prefer-to-be": "error",
    "vitest/prefer-to-contain": "error",
    "vitest/prefer-to-have-length": "error",
    "vitest/prefer-todo": "warn",
    "vitest/require-hook": "error",
    "vitest/require-to-throw-message": "error",
    "vitest/require-top-level-describe": "off",
    // "vitest/unbound-method": "off", // requires typescript, missing https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md
    "vitest/valid-expect": "error",
    "vitest/valid-expect-in-promise": "error",
    "vitest/valid-title": "error",
  } satisfies Rules;
};
