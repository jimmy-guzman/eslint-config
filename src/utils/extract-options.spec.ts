import { extractOptions } from "./extract-options";

describe("extractOptions", () => {
  it("should return undefined when passed true", () => {
    const result = extractOptions(true);

    expect(result).toBeUndefined();
  });

  it("should return undefined when passed false", () => {
    const result = extractOptions(false);

    expect(result).toBeUndefined();
  });

  it("should return the options object when passed an object", () => {
    const options = { enabled: true, threshold: 100 };
    const result = extractOptions(options);

    expect(result).toStrictEqual(options);
  });
});
