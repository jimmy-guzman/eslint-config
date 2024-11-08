import type { ReactOptions, TestingOptions, TypescriptOptions } from "./types";

export const typescriptOptions = (options: boolean | TypescriptOptions) => {
  return typeof options === "object"
    ? options
    : {
        project: "./tsconfig.json",
      };
};

export const testingOptions = (options: boolean | TestingOptions) => {
  return typeof options === "object"
    ? options
    : {
        framework: "vitest" as const,
      };
};

export const reactOptions = (options: boolean | ReactOptions) => {
  return typeof options === "object" ? options : { utilities: [] };
};
