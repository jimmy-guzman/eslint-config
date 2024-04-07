import { getTypescriptOptions } from "./utils";

describe("getTypescriptOptions", () => {
  it("should return default options when a boolean is provided", () => {
    expect(getTypescriptOptions(true)).toStrictEqual({
      project: "./tsconfig.json",
    });
  });
  it("should return override options when an object is provided", () => {
    expect(
      getTypescriptOptions({
        project: "./tsconfig.eslint.json",
      }),
    ).toStrictEqual({
      project: "./tsconfig.eslint.json",
    });
  });
});
