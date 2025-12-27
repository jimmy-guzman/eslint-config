import { perfectionistRules } from "./perfectionist";

describe("perfectionistRules", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("should create perfectionist rules", () => {
    expect(perfectionistRules).toMatchSnapshot();
  });

  it("should handle missing recommended-natural config", async () => {
    vi.doMock("eslint-plugin-perfectionist", () => ({
      configs: {},
    }));

    const { perfectionistRules } = await import("./perfectionist");

    expect(perfectionistRules).toHaveProperty("perfectionist/sort-imports");
    expect(perfectionistRules).toHaveProperty("perfectionist/sort-modules");

    expect(perfectionistRules["perfectionist/sort-imports"]).toBeDefined();
    expect(perfectionistRules["perfectionist/sort-modules"]).toBeDefined();
  });
});
