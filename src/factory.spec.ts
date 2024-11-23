import { isPackageExists } from "local-pkg";

import { jimmyDotCodes } from "./factory";

vi.mock("local-pkg");

describe("jimmyDotCodes", () => {
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
      await expect(jimmyDotCodes({ autoDetect: false })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: `jimmy.codes/${input}` }),
        ]),
      );
    });
  });

  it("should create configuration w/ typescript", async () => {
    await expect(
      jimmyDotCodes({ autoDetect: false, typescript: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/typescript" }),
        expect.objectContaining({ name: "jimmy.codes/imports/typescript" }),
      ]),
    );
  });

  it("should create configuration w/ react", async () => {
    await expect(
      jimmyDotCodes({ autoDetect: false, react: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/react" }),
      ]),
    );
  });

  it("should create configuration w/ react & @tanstack/query", async () => {
    await expect(
      jimmyDotCodes({
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
    await expect(
      jimmyDotCodes({ autoDetect: false, testing: { framework: "jest" } }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/jest" }),
        expect.not.objectContaining({ name: "jimmy.codes/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ vitest", async () => {
    await expect(
      jimmyDotCodes({ autoDetect: false, testing: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.not.objectContaining({ name: "jimmy.codes/jest" }),
        expect.objectContaining({ name: "jimmy.codes/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ jest & react & testing library", async () => {
    await expect(
      jimmyDotCodes({
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
    await expect(
      jimmyDotCodes({
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
      jimmyDotCodes({ astro: true, autoDetect: false }),
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
      jimmyDotCodes({ autoDetect: false, playwright: true }),
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/playwright" }),
      ]),
    );
  });

  describe("autoDetect", () => {
    it("should include typescript when auto detection is enabled", async () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "typescript";
      });

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
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

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
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

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
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

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
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

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
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

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
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

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
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

      await expect(jimmyDotCodes({ autoDetect: true })).resolves.toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "jimmy.codes/playwright" }),
        ]),
      );
    });
  });
});
