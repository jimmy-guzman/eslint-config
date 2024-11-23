import type { ReactOptions, TestingOptions, TypescriptOptions } from "../types";

export const getTypescriptOptions = (options: boolean | TypescriptOptions) => {
  return typeof options === "object" ? options : undefined;
};

export const getTestingOptions = (
  options: boolean | TestingOptions,
  configs: {
    jest: boolean;
    testingLibrary: boolean;
    vitest: boolean;
  },
) => {
  return typeof options === "object"
    ? options
    : ({
        framework: configs.vitest ? "vitest" : configs.jest ? "jest" : "vitest",
        ...(configs.testingLibrary && {
          utilities: ["testing-library" as const],
        }),
      } as const);
};

export const getReactOptions = (options: boolean | ReactOptions) => {
  return typeof options === "object" ? options : { utilities: [] };
};
