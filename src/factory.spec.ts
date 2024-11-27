import { isPackageExists } from "local-pkg";

import { eslintConfig } from "./factory";

vi.mock("local-pkg");

describe("eslintConfig", () => {
  describe("base", () => {
    it.each([
      "node",
      "imports",
      "perfectionist",
      "unicorn",
      "eslint-comments",
      "prettier",
      "ignores",
      "javascript",
      "regexp",
    ])("should create configuration w/ %s", async (input) => {
      await expect(eslintConfig({ autoDetect: false })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: `jimmy.codes/${input}` }),
        ]),
      );
    });
  });

  it("should create configuration w/ typescript", async () => {
    await expect(
      eslintConfig({ autoDetect: false, typescript: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/typescript" }),
        expect.objectContaining({ name: "jimmy.codes/imports/typescript" }),
      ]),
    );
  });

  it("should create configuration w/ react", async () => {
    await expect(
      eslintConfig({ autoDetect: false, react: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/react" }),
      ]),
    );
  });

  it("should create configuration w/ react & @tanstack/query (deprecated)", async () => {
    await expect(
      eslintConfig({
        autoDetect: false,
        react: { utilities: ["@tanstack/query"] },
      }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({ name: "jimmy.codes/react/query" }),
      ]),
    );
  });

  it("should create configuration w/ jest", async () => {
    const configs = await eslintConfig({ autoDetect: false, jest: true });

    expect(configs.at(7)?.name).toBe("jimmy.codes/jest");
  });

  it("should create configuration w/ jest (deprecated)", async () => {
    await expect(
      eslintConfig({ autoDetect: false, testing: { framework: "jest" } }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/jest" }),
        expect.not.objectContaining({ name: "jimmy.codes/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ vitest", async () => {
    const configs = await eslintConfig({ autoDetect: false, vitest: true });

    expect(configs.at(7)?.name).toBe("jimmy.codes/vitest");
  });

  it("should create configuration w/ vitest (deprecated)", async () => {
    await expect(
      eslintConfig({ autoDetect: false, testing: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.not.objectContaining({ name: "jimmy.codes/jest" }),
        expect.objectContaining({ name: "jimmy.codes/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ jest & react & testing library", async () => {
    const configs = await eslintConfig({
      autoDetect: false,
      jest: true,
      react: true,
      testingLibrary: true,
    });

    expect(configs.at(7)?.name).toBe("jimmy.codes/react");
    expect(configs.at(8)?.name).toBe("jimmy.codes/jest");
    expect(configs.at(9)?.name).toBe("jimmy.codes/testing-library");
  });

  it("should create configuration w/ jest & react & testing library (deprecated)", async () => {
    await expect(
      eslintConfig({
        autoDetect: false,
        react: true,
        testing: { framework: "jest", utilities: ["testing-library"] },
      }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/jest" }),
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({ name: "jimmy.codes/testing-library" }),
      ]),
    );
  });

  it("should create configuration w/ vitest & react & testing library", async () => {
    const configs = await eslintConfig({
      autoDetect: false,
      react: true,
      testingLibrary: true,
      vitest: true,
    });

    expect(configs.at(7)?.name).toBe("jimmy.codes/react");
    expect(configs.at(8)?.name).toBe("jimmy.codes/vitest");
    expect(configs.at(9)?.name).toBe("jimmy.codes/testing-library");
  });

  it("should create configuration w/ vitest & react & testing library (deprecated)", async () => {
    await expect(
      eslintConfig({
        autoDetect: false,
        react: true,
        testing: { utilities: ["testing-library"] },
      }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/vitest" }),
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({ name: "jimmy.codes/testing-library" }),
      ]),
    );
  });

  it("should create configuration w/ astro", async () => {
    await expect(
      eslintConfig({ astro: true, autoDetect: false }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "jimmy.codes/astro",
        }),
        expect.objectContaining({
          name: "jimmy.codes/astro/disable-type-checked",
        }),
        expect.objectContaining({
          name: "jimmy.codes/astro/imports",
        }),
      ]),
    );
  });

  it("should create configuration w/ playwright", async () => {
    await expect(
      eslintConfig({ autoDetect: false, playwright: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/playwright" }),
      ]),
    );
  });

  it("should create configuration w/ tanstackQuery", async () => {
    const configs = await eslintConfig({
      autoDetect: false,
      tanstackQuery: true,
    });

    expect(configs.at(7)?.name).toBe("jimmy.codes/react/query");
  });

  it("should create configuration w/ storybook", async () => {
    const configs = await eslintConfig({
      autoDetect: false,
      storybook: true,
    });

    expect(configs.at(7)?.name).toBe("jimmy.codes/storybook/setup");
  });

  describe("autoDetect", () => {
    it("should include typescript when auto detection is enabled", async () => {
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

    it("should include react when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "react";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.not.objectContaining({ name: "jimmy.codes/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/jest" }),
          expect.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing-library" }),
        ]),
      );
    });

    it("should include react-query when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        // eslint-disable-next-line jest/no-conditional-in-test -- this condition is only for the mock.
        return name === "react" || name === "@tanstack/react-query";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.not.objectContaining({ name: "jimmy.codes/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/jest" }),
          expect.objectContaining({ name: "jimmy.codes/react" }),
          expect.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing-library" }),
        ]),
      );
    });

    it("should include vitest when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "vitest";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),

          expect.objectContaining({ name: "jimmy.codes/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing-library" }),
        ]),
      );
    });

    it("should include jest when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "jest";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),

          expect.not.objectContaining({ name: "jimmy.codes/vitest" }),
          expect.objectContaining({ name: "jimmy.codes/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing-library" }),
        ]),
      );
    });

    it("should include test-library when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        // eslint-disable-next-line jest/no-conditional-in-test -- this condition is only for the mock.
        return name === "@testing-library/react" || name === "vitest";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),

          expect.objectContaining({ name: "jimmy.codes/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.objectContaining({
            name: "jimmy.codes/testing-library",
          }),
        ]),
      );
    });

    it("should include astro when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "astro";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "jimmy.codes/astro",
          }),
          expect.objectContaining({
            name: "jimmy.codes/astro/disable-type-checked",
          }),
          expect.objectContaining({
            name: "jimmy.codes/astro/imports",
          }),
        ]),
      );
    });

    it("should include playwright when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "@playwright/test";
      });

      await expect(eslintConfig({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "jimmy.codes/playwright" }),
        ]),
      );
    });

    it("should include storybook when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "storybook";
      });

      const configs = await eslintConfig({
        autoDetect: true,
      });

      expect(configs.at(7)?.name).toBe("jimmy.codes/storybook/setup");
    });
  });
});
