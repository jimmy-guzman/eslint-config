import vitestConfig from "./vitest";

describe("vitestConfig", () => {
  it("should default typecheck to false when not provided", async () => {
    const [config] = await vitestConfig(true);

    expect(config?.settings.vitest.typecheck).toBe(false);
    expect(config?.files).toMatchInlineSnapshot(`
      [
        "**/__tests__/**/*.?([cm])[jt]s?(x)",
        "**/*.spec.?([cm])[jt]s?(x)",
        "**/*.test.?([cm])[jt]s?(x)",
        "**/*.bench.?([cm])[jt]s?(x)",
        "**/*.benchmark.?([cm])[jt]s?(x)",
      ]
    `);
  });

  it("should set typecheck to true when explicitly enabled", async () => {
    const [config] = await vitestConfig({ typecheck: true });

    expect(config?.settings.vitest.typecheck).toBe(true);
    expect(config?.files).toMatchInlineSnapshot(`
      [
        "**/__tests__/**/*.?([cm])[jt]s?(x)",
        "**/*.spec.?([cm])[jt]s?(x)",
        "**/*.test.?([cm])[jt]s?(x)",
        "**/*.bench.?([cm])[jt]s?(x)",
        "**/*.benchmark.?([cm])[jt]s?(x)",
        "**/*.test-d.?([cm])ts",
        "**/*.test-d.?([cm])tsx",
        "**/*.spec-d.?([cm])ts",
        "**/*.spec-d.?([cm])tsx",
      ]
    `);
  });

  it("should set typecheck to false when explicitly disabled", async () => {
    const [config] = await vitestConfig({ typecheck: false });

    expect(config?.settings.vitest.typecheck).toBe(false);
    expect(config?.files).toMatchInlineSnapshot(`
      [
        "**/__tests__/**/*.?([cm])[jt]s?(x)",
        "**/*.spec.?([cm])[jt]s?(x)",
        "**/*.test.?([cm])[jt]s?(x)",
        "**/*.bench.?([cm])[jt]s?(x)",
        "**/*.benchmark.?([cm])[jt]s?(x)",
      ]
    `);
  });

  it("should work alongside globals option", async () => {
    const [config] = await vitestConfig({
      globals: "explicit",
      typecheck: true,
    });

    expect(config?.settings.vitest.typecheck).toBe(true);
    expect(config?.files).toMatchInlineSnapshot(`
      [
        "**/__tests__/**/*.?([cm])[jt]s?(x)",
        "**/*.spec.?([cm])[jt]s?(x)",
        "**/*.test.?([cm])[jt]s?(x)",
        "**/*.bench.?([cm])[jt]s?(x)",
        "**/*.benchmark.?([cm])[jt]s?(x)",
        "**/*.test-d.?([cm])ts",
        "**/*.test-d.?([cm])tsx",
        "**/*.spec-d.?([cm])ts",
        "**/*.spec-d.?([cm])tsx",
      ]
    `);
  });
});
