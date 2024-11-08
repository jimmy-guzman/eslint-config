import { reactRules } from "./react";

test("should create react rules", async () => {
  await expect(reactRules()).resolves.toMatchSnapshot();
});
