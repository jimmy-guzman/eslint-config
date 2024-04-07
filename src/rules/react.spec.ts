import { reactRules } from "./react";

test("should create react rules", () => {
  expect(reactRules).toMatchSnapshot();
});
