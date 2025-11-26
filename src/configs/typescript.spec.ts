import typescriptConfig from "./typescript";

describe("typescriptConfig", () => {
  it("should create config", async () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    await expect(typescriptConfig(true)).resolves.toMatchSnapshot();
  });

  it("should create config w/ projectService", async () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    const [_first, _second, _third, _fourth, config] =
      await typescriptConfig(true);

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

  it("should add erasable syntax only config when enabled", async () => {
    vi.spyOn(process, "cwd").mockReturnValue("/");

    const configs = await typescriptConfig({ erasableSyntaxOnly: true });

    const erasableConfig = configs.find((config) => {
      return config.name === "jimmy.codes/typescript/erasable-syntax-only";
    });

    expect(erasableConfig).toBeDefined();
    expect(erasableConfig).toStrictEqual(
      expect.objectContaining({
        name: "jimmy.codes/typescript/erasable-syntax-only",
        rules: expect.objectContaining({
          "erasable-syntax-only/enums": "error",
          "erasable-syntax-only/import-aliases": "error",
          "erasable-syntax-only/namespaces": "error",
          "erasable-syntax-only/parameter-properties": "error",
        }),
      }),
    );
  });
});
