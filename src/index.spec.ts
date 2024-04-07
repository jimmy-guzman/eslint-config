import index from "./index";

test("should create default configuration", () => {
  expect(index()).toMatchSnapshot();
});

test("should create configuration w/ typescript", () => {
  vi.spyOn(process, "cwd").mockReturnValue("/");

  expect(index({ typescript: true })).toMatchSnapshot();
});

test("should create configuration w/ react", () => {
  expect(index({ react: true })).toMatchSnapshot();
});

test("should create configuration w/o imports", () => {
  expect(index({ imports: false })).toMatchSnapshot();
});

test("should create configuration w/o stylistic", () => {
  expect(index({ stylistic: false, react: true })).toMatchSnapshot();
});

test("should create configuration w/ jest", () => {
  expect(index({ jest: true })).toMatchSnapshot();
});

test("should create configuration w/ vitest", () => {
  expect(index({ vitest: true })).toMatchSnapshot();
});

test("should create configuration w/ jest & w/o stylistic", () => {
  expect(index({ jest: true, stylistic: false })).toMatchSnapshot();
});

test("should create configuration w/ vitest & w/o stylistic", () => {
  expect(index({ vitest: true, stylistic: false })).toMatchSnapshot();
});

test("should create configuration w/ jest & react & testing library", () => {
  expect(
    index({ jest: true, react: true, testingLibrary: true }),
  ).toMatchSnapshot();
});

test("should create configuration w/ vitest & react & testing library", () => {
  expect(
    index({ vitest: true, react: true, testingLibrary: true }),
  ).toMatchSnapshot();
});
