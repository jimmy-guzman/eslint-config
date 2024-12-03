import { nextjsRules } from "./nextjs";

test("should create nextjs rules", async () => {
  await expect(nextjsRules()).resolves.toMatchSnapshot();
});
