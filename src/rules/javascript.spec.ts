import { javascriptRules } from "./javascript";

test("should create javascript rules", () => {
  expect(javascriptRules).toMatchSnapshot();
});
