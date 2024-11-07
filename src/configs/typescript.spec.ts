import { typescriptConfig } from "./typescript";

describe("typescriptConfig", () => {
  it("should create config", () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    expect(typescriptConfig({ project: "/" })).toMatchSnapshot();
  });
});
