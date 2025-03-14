/**
 * Unwraps an imported module, resolving its `default` export if it's a function.
 *
 * This is useful for handling ESLint configurations and other dynamically imported modules,
 * ensuring compatibility with both named and default exports.
 *
 * @template T - The imported module type.
 *
 * @param module - A dynamically imported module.
 *
 * @returns
 * If the module has a `default` export that is a function, it returns the result of calling it.
 * Otherwise, it returns the module itself.
 *
 * @example
 * const config = await unwrap(import("./configs/react"));
 */
export const unwrap = async <
  T extends { default?: (...args: unknown[]) => unknown },
>(
  module: Promise<T>,
) => {
  const resolved = await module;

  if (typeof resolved.default === "function") {
    return resolved.default() as T["default"] extends (
      ...args: unknown[]
    ) => infer U
      ? U
      : T;
  }

  return resolved;
};
