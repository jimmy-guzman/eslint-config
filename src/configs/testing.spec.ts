import { ALLOWED_VITEST_FUNCS } from "../constants";
import testingConfig from "./testing";

describe("testingConfig", () => {
  it("should create default config w/ vitest overrides", () => {
    const [, vitest] = testingConfig({}, false);

    expect(vitest?.rules).toStrictEqual(
      expect.objectContaining({
        "jest/no-deprecated-functions": "off",
        "jest/require-hook": [
          "error",
          {
            allowedFunctionCalls: ALLOWED_VITEST_FUNCS,
          },
        ],
      }),
    );
  });

  it("should create default config w/o vitest overrides", () => {
    const [, jest] = testingConfig({ framework: "jest" }, false);

    expect(jest?.rules).toStrictEqual(
      expect.not.objectContaining({
        "jest/no-deprecated-functions": "off",
        "jest/require-hook": [
          "error",
          {
            allowedFunctionCalls: ALLOWED_VITEST_FUNCS,
          },
        ],
      }),
    );
  });
});
