import { describe, expect, it } from "vitest";

import { unwrap } from "./unwrap";

describe("unwrap", () => {
  it("should return the result of calling default if it's a function", async () => {
    const importedModule = Promise.resolve({
      default: () => {
        return "called";
      },
    });
    const result = await unwrap(importedModule);

    expect(result).toBe("called");
  });

  it("should return an empty object if the module is empty", async () => {
    const importedModule = Promise.resolve({});
    const result = await unwrap(importedModule);

    expect(result).toStrictEqual({});
  });
});
