import { upwarn } from "./upwarn";

describe("upwarn", () => {
  it("should return empty object when no rules", () => {
    const ruleEntries = upwarn();

    expect(ruleEntries).toMatchInlineSnapshot(`{}`);
  });

  it("should return empty object when empty rules", () => {
    const ruleEntries = upwarn({});

    expect(ruleEntries).toMatchInlineSnapshot(`{}`);
  });

  it("should change warnings to errors", () => {
    const ruleEntries = upwarn({
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
