import { normalizeRuleEntries } from "./normalize-rule-entries";

describe("normalizeRuleEntries", () => {
  it("should return empty object when no rules", () => {
    const ruleEntries = normalizeRuleEntries();

    expect(ruleEntries).toMatchInlineSnapshot(`{}`);
  });

  it("should return empty object when empty rules", () => {
    const ruleEntries = normalizeRuleEntries({});

    expect(ruleEntries).toMatchInlineSnapshot(`{}`);
  });

  it("should normalize rule entries", () => {
    const ruleEntries = normalizeRuleEntries({
      "react/forbid-prop-types": 1,
      "react/jsx-uses-react": 2,
      "react/react-in-jsx-scope": 0,
    });

    expect(ruleEntries).toMatchInlineSnapshot(`
      {
        "react/forbid-prop-types": "warn",
        "react/jsx-uses-react": "error",
        "react/react-in-jsx-scope": "off",
      }
    `);
  });

  it("should ignore non number entries", () => {
    const ruleEntries = normalizeRuleEntries({
      "react/jsx-boolean-value": ["error", "never"],
    });

    expect(ruleEntries).toMatchInlineSnapshot(`
      {
        "react/jsx-boolean-value": [
          "error",
          "never",
        ],
      }
    `);
  });
});
