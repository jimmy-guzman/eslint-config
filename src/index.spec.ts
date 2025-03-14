import { defineConfig } from "./index";

test("should create default configuration", () => {
  expect(defineConfig).toStrictEqual(expect.any(Function));
});
