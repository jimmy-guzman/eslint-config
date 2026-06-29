import { isPackageExists } from "local-pkg";

import { unicornRules } from "./unicorn";

vi.mock("local-pkg");

const typescriptGatedRules = [
  "unicorn/no-this-outside-of-class",
  "unicorn/no-unnecessary-boolean-comparison",
  "unicorn/no-useless-coercion",
  "unicorn/no-useless-template-literals",
  "unicorn/require-array-sort-compare",
] as const;

test("should create unicorn rules", () => {
  expect(unicornRules()).toMatchSnapshot();
});

test("should disable typescript-superseded rules with typescript", () => {
  vi.mocked(isPackageExists).mockImplementation((name) => {
    return name === "typescript";
  });

  const rules = unicornRules();

  for (const rule of typescriptGatedRules) {
    expect(rules[rule]).toBe("off");
  }
});

test("should keep typescript-superseded rules enabled without typescript", () => {
  vi.mocked(isPackageExists).mockReturnValue(false);

  const rules = unicornRules();

  for (const rule of typescriptGatedRules) {
    expect(rules[rule]).not.toBe("off");
  }
});
