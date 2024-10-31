import type { ReactOptions, TestingOptions, TypescriptOptions } from "./types";

export const getTypescriptOptions = (options: boolean | TypescriptOptions) => {
  return typeof options === "object"
    ? options
    : {
        project: "./tsconfig.json",
      };
};

export const getTestingOptions = (options: boolean | TestingOptions) => {
  return typeof options === "object"
    ? options
    : {
        framework: "vitest" as const,
      };
};

export const getReactOptions = (options: boolean | ReactOptions) => {
  return typeof options === "object" ? options : { utilities: [] };
};
