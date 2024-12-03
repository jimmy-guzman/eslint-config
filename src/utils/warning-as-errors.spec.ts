import { warningAsErrors } from "./warnings-as-errors";

describe("warningAsErrors", () => {
  it("should return empty object when no rules", () => {
    const ruleEntries = warningAsErrors();

    expect(ruleEntries).toMatchInlineSnapshot(`{}`);
  });

  it("should return empty object when empty rules", () => {
    const ruleEntries = warningAsErrors({});

    expect(ruleEntries).toMatchInlineSnapshot(`{}`);
  });

  it("should change warnings to errors", () => {
    const ruleEntries = warningAsErrors({
      "react/forbid-prop-types": "warn",
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "warn",
    });

    expect(ruleEntries).toMatchInlineSnapshot(`
      {
        "react/forbid-prop-types": "error",
        "react/jsx-uses-react": "error",
        "react/react-in-jsx-scope": "error",
      }
    `);
  });
});
