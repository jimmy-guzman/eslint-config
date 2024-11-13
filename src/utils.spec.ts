import {
  getReactOptions,
  getTestingOptions,
  getTypescriptOptions,
} from "./utils";

describe("getTypescriptOptions", () => {
  it("should return undefined when a boolean is provided", () => {
    expect(getTypescriptOptions(true)).toBeUndefined();
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

describe("getTestingOptions", () => {
  it("should return default options when a boolean is provided", () => {
    expect(getTestingOptions(true)).toStrictEqual({
      framework: "vitest",
    });
  });
  it("should return override options when an object is provided", () => {
    expect(
      getTestingOptions({
        framework: "jest",
        utilities: ["testing-library"],
      }),
    ).toStrictEqual({
      framework: "jest",
      utilities: ["testing-library"],
    });
  });
});

describe("getReactOptions", () => {
  it("should return default options when a boolean is provided", () => {
    expect(getReactOptions(true)).toStrictEqual({ utilities: [] });
  });
  it("should return override options when an object is provided", () => {
    expect(
      getReactOptions({
        utilities: ["@tanstack/query"],
      }),
    ).toStrictEqual({
      utilities: ["@tanstack/query"],
    });
  });
});
