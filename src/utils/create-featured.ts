/**
 * Creates a featured flag checker function.
 *
 * @param autoDetect  - Whether to auto-detect features.
 *
 * @returns A function that determines if a feature is enabled.
 */
export const createFeatured = (autoDetect: boolean) => {
  return (explicit: boolean | object, detector: () => boolean) => {
    if (typeof explicit !== "boolean") {
      return true;
    }

    return explicit || (autoDetect && detector());
  };
};
