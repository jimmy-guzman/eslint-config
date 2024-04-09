import { jimmyDotCodes } from "./factory";

describe("jimmyDotCodes", () => {
  it("should create default configuration", () => {
    expect(jimmyDotCodes()).toMatchSnapshot();
  });

  it("should create configuration w/ typescript", () => {
    expect(jimmyDotCodes({ typescript: true })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/typescript" }),
        expect.objectContaining({ name: "jimmy.codes/imports/typescript" }),
      ]),
    );
  });

  it("should create configuration w/ react", () => {
    expect(jimmyDotCodes({ react: true })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/react" }),
      ]),
    );
  });

  it("should create configuration w/ react & @tanstack/query", () => {
    expect(
      jimmyDotCodes({ react: { utilities: ["@tanstack/query"] } }),
    ).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({ name: "jimmy.codes/react/query" }),
      ]),
    );
  });

  it("should create configuration w/ jest", () => {
    expect(jimmyDotCodes({ testing: { framework: "jest" } })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.objectContaining({ name: "jimmy.codes/testing/jest" }),
        expect.not.objectContaining({ name: "jimmy.codes/testing/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ vitest", () => {
    expect(jimmyDotCodes({ testing: true })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.not.objectContaining({ name: "jimmy.codes/testing/jest" }),
        expect.objectContaining({ name: "jimmy.codes/testing/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ jest & react & testing library", () => {
    expect(
      jimmyDotCodes({
        react: true,
        testing: { framework: "jest", utilities: ["testing-library"] },
      }),
    ).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.objectContaining({ name: "jimmy.codes/testing/jest" }),
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library",
        }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library/disabled",
        }),
      ]),
    );
  });

  it("should create configuration w/ vitest & react & testing library", () => {
    expect(
      jimmyDotCodes({
        react: true,
        testing: { utilities: ["testing-library"] },
      }),
    ).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.objectContaining({ name: "jimmy.codes/testing/vitest" }),
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library",
        }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library/disabled",
        }),
      ]),
    );
  });
});
