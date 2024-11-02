import { eslintCommentsRules } from "./eslint-comments";

test("should create eslintComments rules", () => {
  expect(eslintCommentsRules).toMatchSnapshot();
});
