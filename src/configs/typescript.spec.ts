import typescriptConfig from "./typescript";

describe("typescriptConfig", () => {
  it("should create config", async () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    await expect(typescriptConfig()).resolves.toMatchSnapshot();
  });

  it("should create config w/ projectService", async () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    const [_first, _second, _third, _fourth, config] = await typescriptConfig();

    expect(config).toStrictEqual(
      expect.objectContaining({
        languageOptions: expect.objectContaining({
          parserOptions: expect.objectContaining({
            projectService: true,
            tsconfigRootDir: "/",
          }),
        }),
      }),
    );
  });
});
