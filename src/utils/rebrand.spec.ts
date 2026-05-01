import type { Linter } from "eslint";

import { rebrand } from "./rebrand";

describe("rebrand", () => {
  it("should rename rule keys matching the from prefix", () => {
    const rules: Linter.RulesRecord = {
      "jest-dom-ya/prefer-in-document": "warn",
      "jest-dom-ya/prefer-to-have-text-content": "error",
    };

    expect(rebrand(rules, "jest-dom-ya", "jest-dom")).toStrictEqual({
      "jest-dom/prefer-in-document": "warn",
      "jest-dom/prefer-to-have-text-content": "error",
    });
  });

  it("should preserve rule options and severity", () => {
    const rules: Linter.RulesRecord = {
      "jest-dom-ya/prefer-checked": ["error", { someOption: true }],
    };

    expect(rebrand(rules, "jest-dom-ya", "jest-dom")).toStrictEqual({
      "jest-dom/prefer-checked": ["error", { someOption: true }],
    });
  });

  it("should leave non-matching rule keys untouched", () => {
    const rules: Linter.RulesRecord = {
      "jest-dom-ya/prefer-checked": "error",
      "react/jsx-key": "warn",
      "testing-library/no-test-id-queries": "error",
    };

    expect(rebrand(rules, "jest-dom-ya", "jest-dom")).toStrictEqual({
      "jest-dom/prefer-checked": "error",
      "react/jsx-key": "warn",
      "testing-library/no-test-id-queries": "error",
    });
  });

  it("should only match full prefix segments, not substrings", () => {
    const rules: Linter.RulesRecord = {
      "jest-dom-ya-extra/some-rule": "error",
    };

    expect(rebrand(rules, "jest-dom", "renamed")).toStrictEqual({
      "jest-dom-ya-extra/some-rule": "error",
    });
  });

  it("should return an empty object when rules is undefined", () => {
    expect(rebrand(undefined, "jest-dom-ya", "jest-dom")).toStrictEqual({});
  });

  it("should return an empty object when rules is empty", () => {
    expect(rebrand({}, "jest-dom-ya", "jest-dom")).toStrictEqual({});
  });

  it("should not mutate the input", () => {
    const rules: Linter.RulesRecord = {
      "jest-dom-ya/prefer-checked": "error",
    };
    const snapshot = { ...rules };

    rebrand(rules, "jest-dom-ya", "jest-dom");

    expect(rules).toStrictEqual(snapshot);
  });
});
