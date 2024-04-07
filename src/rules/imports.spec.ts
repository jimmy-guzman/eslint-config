import { importsRules } from "./imports";

test("should create imports rules", () => {
  expect(importsRules).toMatchSnapshot();
});
