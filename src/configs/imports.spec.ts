import importsConfig from "./imports";

describe("importsConfig", () => {
  it("should create config w/ flat config parsing fixes", () => {
    const [imports] = importsConfig();

    expect(imports).toStrictEqual(
      expect.objectContaining({
        languageOptions: {
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
          },
        },
        settings: {
          "import-x/parsers": {
            espree: [".js", ".cjs", ".mjs", ".jsx"],
          },
        },
      }),
    );
  });
});
