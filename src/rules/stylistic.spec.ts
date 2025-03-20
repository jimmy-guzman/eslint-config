import { stylisticRules } from "./stylistic";

test("should create stylistic rules", () => {
  expect(stylisticRules).toMatchSnapshot();
});
