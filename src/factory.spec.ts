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
    expect(jimmyDotCodes({ react: true })).toMatchSnapshot();
  });

  it("should create configuration w/ jest", () => {
    expect(jimmyDotCodes({ testing: { framework: "jest" } })).toMatchSnapshot();
  });

  it("should create configuration w/ vitest", () => {
    expect(jimmyDotCodes({ testing: true })).toMatchSnapshot();
  });

  it("should create configuration w/ jest & react & testing library", () => {
    expect(
      jimmyDotCodes({
        react: true,
        testing: { framework: "jest", utilities: ["testing-library"] },
      }),
    ).toMatchSnapshot();
  });

  it("should create configuration w/ vitest & react & testing library", () => {
    expect(
      jimmyDotCodes({
        react: true,
        testing: { utilities: ["testing-library"] },
      }),
    ).toMatchSnapshot();
  });
});
