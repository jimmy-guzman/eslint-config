import { interopDefault } from "./interop-default";

describe("interopDefault", () => {
  it("should return the default export if present", async () => {
    const importedModule = Promise.resolve({ default: "defaultValue" });
    const result = await interopDefault(importedModule);

    expect(result).toBe("defaultValue");
  });

  it("should return the default export if it's a function", async () => {
    const importedModule = Promise.resolve({
      default: () => {
        return "called";
      },
    });

    const result = await interopDefault(importedModule);

    expect(result).toBeTypeOf("function");
    expect(result()).toBe("called");
  });

  it("should return the full module if no default export exists", async () => {
    const importedModule = Promise.resolve({ namedExport: "value" });
    const result = await interopDefault(importedModule);

    expect(result).toStrictEqual({ namedExport: "value" });
  });

  it("should return the module itself if already resolved", async () => {
    const moduleInstance = { namedExport: "directValue" };
    const result = await interopDefault(moduleInstance);

    expect(result).toStrictEqual(moduleInstance);
  });

  it("should handle null module", async () => {
    const importedModule = Promise.resolve(null);
    const result = await interopDefault(importedModule);

    expect(result).toBeNull();
  });

  it("should handle an empty module object", async () => {
    const importedModule = Promise.resolve({});
    const result = await interopDefault(importedModule);

    expect(result).toStrictEqual({});
  });
});
