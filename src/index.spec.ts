import index from "./index";

test("should create default configuration", () => {
  expect(index()).toMatchSnapshot();
});
