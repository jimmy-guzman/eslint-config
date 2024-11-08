import { reactOptions, testingOptions, typescriptOptions } from "./utils";

describe("getTypescriptOptions", () => {
  it("should return default options when a boolean is provided", () => {
    expect(typescriptOptions(true)).toStrictEqual({
      project: "./tsconfig.json",
    });
  });
  it("should return override options when an object is provided", () => {
    expect(
      typescriptOptions({
        project: "./tsconfig.eslint.json",
      }),
    ).toStrictEqual({
      project: "./tsconfig.eslint.json",
    });
  });
});

describe("getTestingOptions", () => {
  it("should return default options when a boolean is provided", () => {
    expect(testingOptions(true)).toStrictEqual({
      framework: "vitest",
    });
  });
  it("should return override options when an object is provided", () => {
    expect(
      testingOptions({
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
    expect(reactOptions(true)).toStrictEqual({ utilities: [] });
  });
  it("should return override options when an object is provided", () => {
    expect(
      reactOptions({
        utilities: ["@tanstack/query"],
      }),
    ).toStrictEqual({
      utilities: ["@tanstack/query"],
    });
  });
});
