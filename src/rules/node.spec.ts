import { nodeRules } from "./node";

test("should create node rules", () => {
  expect(nodeRules).toMatchSnapshot();
});
