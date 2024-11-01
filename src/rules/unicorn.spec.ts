import { unicornRules } from "./unicorn";

test("should create unicorn rules", () => {
  expect(unicornRules).toMatchSnapshot();
});
