import { isPackageExists } from "local-pkg";

import { vitestRules } from "./vitest";

vi.mock("local-pkg");

test("should create vitest rules", async () => {
  await expect(vitestRules()).resolves.toMatchSnapshot();
});

test("should enable typescript-aware unbound-method rules with typescript", async () => {
  vi.mocked(isPackageExists).mockImplementation((name) => {
    return name === "typescript";
  });

  const rules = await vitestRules();

  expect(rules["vitest/unbound-method"]).toBe("error");
  expect(rules["@typescript-eslint/unbound-method"]).toBe("off");
});

test("should disable vitest/unbound-method without typescript", async () => {
  const rules = await vitestRules();

  expect(rules["vitest/unbound-method"]).toBe("off");
  expect(rules["@typescript-eslint/unbound-method"]).toBeUndefined();
});

test("should enforce importing vitest globals when 'explicit' option is used", async () => {
  const rules = await vitestRules({ globals: "explicit" });

  expect(rules["vitest/prefer-importing-vitest-globals"]).toBe("error");
  expect(rules["vitest/no-importing-vitest-globals"]).toBe("off");
});

test("should enforce NOT importing vitest globals when 'implicit' option is used", async () => {
  const rules = await vitestRules({ globals: "implicit" });

  expect(rules["vitest/no-importing-vitest-globals"]).toBe("error");
  expect(rules["vitest/prefer-importing-vitest-globals"]).toBe("off");
});

test("should not care about importing vitest globals when 'either' option is used", async () => {
  const rules = await vitestRules({ globals: "either" });

  expect(rules["vitest/no-importing-vitest-globals"]).toBe("off");
  expect(rules["vitest/prefer-importing-vitest-globals"]).toBe("off");
});
