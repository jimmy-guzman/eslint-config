import { jsdocRules } from "./jsdoc";

test("should create jsdoc rules", () => {
  expect(jsdocRules()).toMatchSnapshot();
});
