import { jimmyDotCodes } from "./factory";

describe("jimmyDotCodes", () => {
  it("should create default configuration", () => {
    expect(jimmyDotCodes()).toMatchSnapshot();
  });

  it("should create configuration w/ typescript", () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    expect(jimmyDotCodes({ typescript: true })).toMatchSnapshot();
  });

  it("should create configuration w/ react", () => {
    expect(jimmyDotCodes({ react: true })).toMatchSnapshot();
  });

  it("should create configuration w/o imports", () => {
    expect(jimmyDotCodes({ imports: false })).toMatchSnapshot();
  });

  it("should create configuration w/ jest", () => {
    expect(jimmyDotCodes({ jest: true })).toMatchSnapshot();
  });

  it("should create configuration w/ vitest", () => {
    expect(jimmyDotCodes({ vitest: true })).toMatchSnapshot();
  });

  it("should create configuration w/ jest & react & testing library", () => {
    expect(
      jimmyDotCodes({ jest: true, react: true, testingLibrary: true }),
    ).toMatchSnapshot();
  });

  it("should create configuration w/ vitest & react & testing library", () => {
    expect(
      jimmyDotCodes({ vitest: true, react: true, testingLibrary: true }),
    ).toMatchSnapshot();
  });
});
