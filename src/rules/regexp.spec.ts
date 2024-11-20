import { regexpRules } from "./regexp";

test("should create regexp rules", () => {
  expect(regexpRules).toMatchSnapshot();
});
