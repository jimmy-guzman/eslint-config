import { isPackageExists } from "local-pkg";

import { jimmyDotCodes } from "./factory";

vi.mock("local-pkg");

describe("jimmyDotCodes", () => {
  it("should create configuration w/ typescript", () => {
    expect(jimmyDotCodes({ typescript: true })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/typescript" }),
        expect.objectContaining({ name: "jimmy.codes/imports/typescript" }),
      ]),
    );
  });

  it("should create configuration w/ react", () => {
    expect(jimmyDotCodes({ react: true })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/react" }),
      ]),
    );
  });

  it("should create configuration w/ react & @tanstack/query", () => {
    expect(
      jimmyDotCodes({ react: { utilities: ["@tanstack/query"] } }),
    ).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({ name: "jimmy.codes/react/query" }),
      ]),
    );
  });

  it("should create configuration w/ jest", () => {
    expect(jimmyDotCodes({ testing: { framework: "jest" } })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.objectContaining({ name: "jimmy.codes/testing/jest" }),
        expect.not.objectContaining({ name: "jimmy.codes/testing/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ vitest", () => {
    expect(jimmyDotCodes({ testing: true })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.not.objectContaining({ name: "jimmy.codes/testing/jest" }),
        expect.objectContaining({ name: "jimmy.codes/testing/vitest" }),
      ]),
    );
  });

  it("should create configuration w/ jest & react & testing library", () => {
    expect(
      jimmyDotCodes({
        react: true,
        testing: { framework: "jest", utilities: ["testing-library"] },
      }),
    ).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.objectContaining({ name: "jimmy.codes/testing/jest" }),
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library",
        }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library/disabled",
        }),
      ]),
    );
  });

  it("should create configuration w/ vitest & react & testing library", () => {
    expect(
      jimmyDotCodes({
        react: true,
        testing: { utilities: ["testing-library"] },
      }),
    ).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "jimmy.codes/testing" }),
        expect.objectContaining({ name: "jimmy.codes/testing/disabled" }),
        expect.objectContaining({ name: "jimmy.codes/testing/vitest" }),
        expect.objectContaining({ name: "jimmy.codes/react" }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library",
        }),
        expect.objectContaining({
          name: "jimmy.codes/testing/testing-library/disabled",
        }),
      ]),
    );
  });

  it("should create configuration w/ astro", () => {
    expect(jimmyDotCodes({ astro: true })).toStrictEqual(
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

  describe("autoDetect", () => {
    it("should include typescript when auto detection is enabled", () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "typescript";
      });

      expect(jimmyDotCodes({ autoDetect: true })).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({
            name: "jimmy.codes/testing/testing-library",
          }),
        ]),
      );
    });

    it("should include react when auto detection is enabled", () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "react";
      });

      expect(jimmyDotCodes({ autoDetect: true })).toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/jest" }),
          expect.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({
            name: "jimmy.codes/testing/testing-library",
          }),
        ]),
      );
    });

    it("should include react-query when auto detection is enabled", () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        // eslint-disable-next-line jest/no-conditional-in-test
        return name === "react" || name === "@tanstack/react-query";
      });

      expect(jimmyDotCodes({ autoDetect: true })).toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/jest" }),
          expect.objectContaining({ name: "jimmy.codes/react" }),
          expect.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({
            name: "jimmy.codes/testing/testing-library",
          }),
        ]),
      );
    });

    it("should include vitest when auto detection is enabled", () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "vitest";
      });

      expect(jimmyDotCodes({ autoDetect: true })).toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.objectContaining({ name: "jimmy.codes/testing" }),
          expect.objectContaining({ name: "jimmy.codes/testing/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({
            name: "jimmy.codes/testing/testing-library",
          }),
        ]),
      );
    });

    it("should include jest when auto detection is enabled", () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "jest";
      });

      expect(jimmyDotCodes({ autoDetect: true })).toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.objectContaining({ name: "jimmy.codes/testing" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/vitest" }),
          expect.objectContaining({ name: "jimmy.codes/testing/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.not.objectContaining({
            name: "jimmy.codes/testing/testing-library",
          }),
        ]),
      );
    });

    it("should include test-library when auto detection is enabled", () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        // eslint-disable-next-line jest/no-conditional-in-test
        return name === "@testing-library/react" || name === "vitest";
      });

      expect(jimmyDotCodes({ autoDetect: true })).toStrictEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ name: "jimmy.codes/typescript" }),
          expect.objectContaining({ name: "jimmy.codes/testing" }),
          expect.objectContaining({ name: "jimmy.codes/testing/vitest" }),
          expect.not.objectContaining({ name: "jimmy.codes/testing/jest" }),
          expect.not.objectContaining({ name: "jimmy.codes/react" }),
          expect.not.objectContaining({ name: "jimmy.codes/react/query" }),
          expect.objectContaining({
            name: "jimmy.codes/testing/testing-library",
          }),
        ]),
      );
    });

    it("should include astro when auto detection is enabled", () => {
      vi.mocked(isPackageExists).mockImplementation((name) => {
        return name === "astro";
      });

      expect(jimmyDotCodes({ autoDetect: true })).toStrictEqual(
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
  });
});
