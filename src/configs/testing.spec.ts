import { testingConfig } from "./testing";

describe("testingConfig", () => {
  it("should create default config w/ vitest", async () => {
    const [vitest] = await testingConfig({}, false);

    expect(vitest?.name).toBe("jimmy.codes/vitest");
  });

  it("should create default config w/ jest", async () => {
    const [jest] = await testingConfig({ framework: "jest" }, false);

    expect(jest?.name).toBe("jimmy.codes/jest");
  });
});
