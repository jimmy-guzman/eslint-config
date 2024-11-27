import { typescriptConfig } from "./typescript";

describe("typescriptConfig", () => {
  it("should create config", () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    expect(typescriptConfig()).toMatchSnapshot();
  });

  it("should create config w/ projectService", () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    const [_first, _second, _third, _fourth, config] = typescriptConfig();

    expect(config?.languageOptions?.parserOptions).toMatchInlineSnapshot(
      `
      {
        "projectService": true,
        "tsconfigRootDir": "/",
      }
    `,
    );
  });
});
