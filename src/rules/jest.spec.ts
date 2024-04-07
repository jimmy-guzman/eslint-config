import { jestRules } from "./jest";

test("should create jest rules", () => {
  expect(jestRules).toMatchSnapshot();
});
