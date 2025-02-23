import { isPackageExists } from "local-pkg";

import { reactRules } from "./react";

vi.mock("local-pkg");

describe("reactRules", () => {
  it("should create react rules", async () => {
    await expect(reactRules()).resolves.toMatchSnapshot();
  });

  it("should add allowExportNames for nextjs", async () => {
    vi.mocked(isPackageExists).mockImplementation((name) => {
      return name === "next";
    });

    const rules = await reactRules();

    const allowExportNames =
      rules["react-refresh/only-export-components"][1].allowExportNames;

    expect(allowExportNames).toMatchInlineSnapshot(`
      [
        "dynamic",
        "dynamicParams",
        "revalidate",
        "fetchCache",
        "runtime",
        "preferredRegion",
        "maxDuration",
        "config",
        "generateStaticParams",
        "metadata",
        "generateMetadata",
        "viewport",
        "generateViewport",
      ]
    `);
  });

  it("should only enable allowConstantExport for vite", async () => {
    vi.mocked(isPackageExists).mockImplementation((name) => {
      return name === "vite";
    });

    const rules = await reactRules();

    const allowConstantExport =
      rules["react-refresh/only-export-components"][1].allowConstantExport;

    expect(allowConstantExport).toBe(true);
  });
});
