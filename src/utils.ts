import type { ReactOptions, TestingOptions, TypescriptOptions } from "./types";

export const getTypescriptOptions = (options: boolean | TypescriptOptions) => {
  return typeof options === "object" ? options : undefined;
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

export const addTanstackQuery = (options: ReactOptions) => {
  return Boolean(options.utilities?.includes("@tanstack/query"));
};

export const addTestingLibrary = (options: TestingOptions) => {
  return Boolean(options.utilities?.includes("testing-library"));
};

/* v8 ignore start */
/**
 * Utility to safely fetch an imported `ESLint` plugin.
 *
 * Since ESLint Flat Config still isn't widely adopted, many plugins don't include types or a default import by default. Additionally, since we accept large version ranges in our peer dependencies, the structure of plugins may change at times. This function normalizes an import of a generic ESLint plugin, ensuring it is typed and accessible.
 *
 * @param module the result of `import('eslint-plugin-name')`.
 * @returns The normalized and awaited default export.
 */
export const interopDefault = async <T>(
  module: Promise<T> | T,
): Promise<T extends { default: infer U } ? U : T> => {
  const resolved = await module;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any -- idk
  return (resolved as any).default ?? resolved;
};
/* v8 ignore stop */
