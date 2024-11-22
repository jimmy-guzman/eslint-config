import { vitestRules } from "./vitest";

test("should create vitest rules", async () => {
  await expect(vitestRules()).resolves.toMatchSnapshot();
});
