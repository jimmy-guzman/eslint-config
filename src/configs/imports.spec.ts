import importsConfig from "./imports";

describe("importsConfig", () => {
  it("should create default config", () => {
    expect(importsConfig()).toMatchSnapshot();
  });
  it("should create config w/ flat config parsing fixes", () => {
    const [imports] = importsConfig();

    expect(imports).toStrictEqual(
      expect.objectContaining({
        settings: {
          "import-x/parsers": {
            espree: [".js", ".cjs", ".mjs", ".jsx"],
          },
        },
        languageOptions: {
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
          },
        },
      }),
    );
  });
});
