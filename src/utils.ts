import { type TypescriptOptions } from "./types";

export const getTypescriptOptions = (options: boolean | TypescriptOptions) => {
  return typeof options === "object" ? options : { project: "./tsconfig.json" };
};
