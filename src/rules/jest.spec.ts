import { jestRules } from "./jest";

test("should create jest rules", async () => {
  await expect(jestRules()).resolves.toMatchSnapshot();
});
