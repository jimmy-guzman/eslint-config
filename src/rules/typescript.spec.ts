import { typescriptRules } from "./typescript";

test("should create typescript rules", () => {
  expect(typescriptRules).toMatchSnapshot();
});
