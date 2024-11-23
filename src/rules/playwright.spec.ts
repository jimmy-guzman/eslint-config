import { playwrightRules } from "./playwright";

test("should create playwright rules", async () => {
  await expect(playwrightRules()).resolves.toMatchSnapshot();
});
