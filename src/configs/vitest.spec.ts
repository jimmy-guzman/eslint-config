import { GLOB_TESTS, GLOB_TYPE_TESTS } from "../globs";
import vitestConfig from "./vitest";

describe("vitestConfig", () => {
  it("should default typecheck to false when not provided", async () => {
    const [config] = await vitestConfig(true);

    expect(config?.settings.vitest.typecheck).toBe(false);
    expect(config?.files).toStrictEqual(GLOB_TESTS);
  });

  it("should set typecheck to true when explicitly enabled", async () => {
    const [config] = await vitestConfig({ typecheck: true });

    expect(config?.settings.vitest.typecheck).toBe(true);
    expect(config?.files).toStrictEqual([...GLOB_TESTS, ...GLOB_TYPE_TESTS]);
  });

  it("should set typecheck to false when explicitly disabled", async () => {
    const [config] = await vitestConfig({ typecheck: false });

    expect(config?.settings.vitest.typecheck).toBe(false);
    expect(config?.files).toStrictEqual(GLOB_TESTS);
  });

  it("should work alongside globals option", async () => {
    const [config] = await vitestConfig({
      globals: "explicit",
      typecheck: true,
    });

    expect(config?.settings.vitest.typecheck).toBe(true);
    expect(config?.files).toStrictEqual([...GLOB_TESTS, ...GLOB_TYPE_TESTS]);
  });
});
