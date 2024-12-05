import { importsConfig } from "./imports";

describe("importsConfig", () => {
  it("should only contain base config", () => {
    const [base, typescript] = importsConfig();

    expect(base.name).toBe("jimmy.codes/imports");
    expect(typescript?.name).toBeUndefined();
  });

  it("should contain typescript config when enabled", () => {
    const [base, typescript] = importsConfig({ typescript: true });

    expect(base.name).toBe("jimmy.codes/imports");
    expect(typescript?.name).toBe("jimmy.codes/imports/typescript");
  });

  it("should contain typescript settings config when enabled", () => {
    const [_base, typescript] = importsConfig({ typescript: true });

    expect(typescript?.settings).toMatchInlineSnapshot(`
      {
        "import-x/extensions": [
          ".ts",
          ".tsx",
          ".cts",
          ".mts",
          ".js",
          ".jsx",
          ".cjs",
          ".mjs",
        ],
        "import-x/external-module-folders": [
          "node_modules",
          "node_modules/@types",
        ],
        "import-x/parsers": {
          "@typescript-eslint/parser": [
            ".ts",
            ".tsx",
            ".cts",
            ".mts",
          ],
        },
        "import-x/resolver-next": [
          {
            "interfaceVersion": 3,
            "name": "eslint-import-resolver-typescript",
            "resolve": [Function],
          },
        ],
      }
    `);
  });
});
