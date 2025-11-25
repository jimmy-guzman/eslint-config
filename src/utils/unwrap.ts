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
 * @param args - Optional arguments forwarded to the module's default export if it's a function.
 *
 * @returns
 * If the module has a `default` export that is a function, it returns the result of calling it.
 * Otherwise, it returns the module itself.
 *
 * @example
 * const config = await unwrap(import("./configs/react"));
 * const configWithOptions = await unwrap(import("./configs/react"), { version: "12" });
 */
export const unwrap = async <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Need to infer types dynamically
  T extends { default?: (...args: any[]) => unknown },
>(
  module: Promise<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Need to infer types dynamically
  ...args: T["default"] extends (...fnArgs: infer A) => any ? A : []
) => {
  const resolved = await module;

  if (typeof resolved.default === "function") {
    return resolved.default(...args) as T["default"] extends (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Need to infer types dynamically
      ...fnArgs: any[]
    ) => infer U
      ? U
      : T;
  }

  return resolved;
};
