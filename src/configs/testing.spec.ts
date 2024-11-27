import { GLOB_E2E } from "../constants";
import { testingConfig } from "./testing";

describe("testingConfig", () => {
  it("should create default config w/ vitest", async () => {
    const [vitest] = await testingConfig({ vitest: true }, false);

    expect(vitest?.name).toBe("jimmy.codes/vitest");
    expect(vitest?.ignores).toStrictEqual(GLOB_E2E);
  });

  it("should create default config w/ jest", async () => {
    const [jest] = await testingConfig({ jest: true }, false);

    expect(jest?.name).toBe("jimmy.codes/jest");
    expect(jest?.ignores).toStrictEqual(GLOB_E2E);
  });
});
