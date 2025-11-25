import { vitestRules } from "./vitest";

test("should create vitest rules", async () => {
  await expect(vitestRules()).resolves.toMatchSnapshot();
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
