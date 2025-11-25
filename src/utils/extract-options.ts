/**
 * A simple utility to derive options for configurations when one option is a boolean.
 *
 * @param options - The options to derive.
 *
 * @returns The extracted options or `undefined` if the input was a boolean.
 */
export const extractOptions = <T extends object>(options: boolean | T) => {
  if (typeof options !== "boolean") {
    return options;
  }

  return undefined;
};
