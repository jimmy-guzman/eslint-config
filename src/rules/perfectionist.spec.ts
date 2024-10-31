import { perfectionistRules } from "./perfectionist";

test("should create perfectionist rules", () => {
  expect(perfectionistRules).toMatchSnapshot();
});
