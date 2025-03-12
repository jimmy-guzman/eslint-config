/* v8 ignore start */
/**
 * Utility to safely fetch an imported `ESLint` plugin.
 *
 * Since ESLint Flat Config still isn't widely adopted, many plugins don't include types or a default import by default. Additionally, since we accept large version ranges in our peer dependencies, the structure of plugins may change at times. This function normalizes an import of a generic ESLint plugin, ensuring it is typed and accessible.
 *
 * @param module the result of `import('eslint-plugin-name')`.
 *
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
