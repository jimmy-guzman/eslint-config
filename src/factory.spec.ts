import { isPackageExists } from "local-pkg";

import { eslintConfig } from "./factory";

vi.mock("local-pkg");

describe("eslintConfig", () => {
  describe("base", () => {
    it.each([
      ["node"],
      ["imports"],
      ["perfectionist"],
      ["unicorn"],
      ["eslint-comments"],
      ["prettier"],
      ["ignores"],
      ["javascript"],
      ["regexp"],
      ["jsdoc"],
    ])("should include %s in the base configuration", async (configName) => {
      await expect(eslintConfig({ autoDetect: false })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: `jimmy.codes/${configName}` }),
        ]),
      );
    });
  });

  describe("feature configurations", () => {
    it.each([
      [
        "typescript",
        { typescript: true },
        ["jimmy.codes/typescript", "jimmy.codes/imports/typescript"],
      ],
      ["react", { react: true }, ["jimmy.codes/react"]],
      ["jest", { jest: true }, ["jimmy.codes/jest"]],
      ["vitest", { vitest: true }, ["jimmy.codes/vitest"]],
      ["playwright", { playwright: true }, ["jimmy.codes/playwright"]],
      ["storybook", { storybook: true }, ["jimmy.codes/storybook/setup"]],
      ["nextjs", { nextjs: true }, ["jimmy.codes/nextjs"]],
      ["tanstackQuery", { tanstackQuery: true }, ["jimmy.codes/react/query"]],
      [
        "testingLibrary",
        { testingLibrary: true },
        ["jimmy.codes/testing-library"],
      ],
    ])(
      "should include %s configuration",
      async (_, options, expectedConfigs) => {
        const matchers = expectedConfigs.map((name) => {
          return expect.objectContaining({ name }) as unknown;
        });

        await expect(
          eslintConfig({ autoDetect: false, ...options }),
        ).resolves.toStrictEqual(expect.arrayContaining(matchers));
      },
    );

    it("should include multiple configurations together", async () => {
      await expect(
        eslintConfig({
          autoDetect: false,
          jest: true,
          react: true,
          testingLibrary: true,
        }),
      ).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "jimmy.codes/react" }),
          expect.objectContaining({ name: "jimmy.codes/jest" }),
          expect.objectContaining({ name: "jimmy.codes/testing-library" }),
        ]),
      );
    });

    it("should include vitest & react & testing library together", async () => {
      await expect(
        eslintConfig({
          autoDetect: false,
          react: true,
          testingLibrary: true,
          vitest: true,
        }),
      ).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "jimmy.codes/react" }),
          expect.objectContaining({ name: "jimmy.codes/vitest" }),
          expect.objectContaining({ name: "jimmy.codes/testing-library" }),
        ]),
      );
    });

    it("should include astro configurations", async () => {
      await expect(
        eslintConfig({ astro: true, autoDetect: false }),
      ).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "jimmy.codes/astro" }),
          expect.objectContaining({
            name: "jimmy.codes/astro/disable-type-checked",
          }),
          expect.objectContaining({ name: "jimmy.codes/astro/imports" }),
        ]),
      );
    });
  });

  describe("autoDetect", () => {
    it.each([
      ["typescript", "jimmy.codes/typescript"],
      ["react", "jimmy.codes/react"],
      ["@tanstack/react-query", "jimmy.codes/react/query"],
      ["vitest", "jimmy.codes/vitest"],
      ["jest", "jimmy.codes/jest"],
      ["@testing-library/react", "jimmy.codes/testing-library"],
      ["astro", "jimmy.codes/astro"],
      ["@playwright/test", "jimmy.codes/playwright"],
      ["storybook", "jimmy.codes/storybook/setup"],
      ["next", "jimmy.codes/nextjs"],
    ])(
      "should include %s when auto detection is enabled",
      async (pkg, configName) => {
        vi.mocked(isPackageExists).mockImplementation((name) => {
          return name === pkg;
        });

        await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: configName }),
          ]),
        );
      },
    );

    it("should exclude unrelated configs when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "typescript";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.not.objectContaining({ name: "jimmy.codes/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing-library" }),
        ]),
      );
    });
  });
});
