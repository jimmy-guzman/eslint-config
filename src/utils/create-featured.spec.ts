import { createFeatured } from "./create-featured";

describe("createFeatured", () => {
  it("should return true when explicit is an object", () => {
    const getFlag = createFeatured(true);
    const detector = vi.fn();

    expect(getFlag({ some: "config" }, detector)).toBe(true);
    expect(detector).not.toHaveBeenCalled();
  });

  it("should return true when explicit is true", () => {
    const getFlag = createFeatured(false);
    const detector = vi.fn();

    expect(getFlag(true, detector)).toBe(true);
    expect(detector).not.toHaveBeenCalled();
  });

  it("should return false when explicit is false and autoDetect is false", () => {
    const getFlag = createFeatured(false);
    const detector = vi.fn(() => true);

    expect(getFlag(false, detector)).toBe(false);
    expect(detector).not.toHaveBeenCalled();
  });

  it("should call detector when explicit is false and autoDetect is true", () => {
    const getFlag = createFeatured(true);
    const detector = vi.fn(() => true);

    expect(getFlag(false, detector)).toBe(true);
    expect(detector).toHaveBeenCalledOnce();
  });

  it("should return false when detector returns false", () => {
    const getFlag = createFeatured(true);
    const detector = vi.fn(() => false);

    expect(getFlag(false, detector)).toBe(false);
  });
});
