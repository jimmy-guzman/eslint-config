import { baseRules } from "./base";

test("should create base rules", () => {
  expect(baseRules).toMatchSnapshot();
});
