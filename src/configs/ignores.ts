import type { TypedConfigItem } from "../types";

import { GLOB_IGNORES } from "../constants";

export const ignoresConfig = (ignores: string[]) => {
  return [
    {
      ignores: [...GLOB_IGNORES, ...ignores],
      name: "jimmy.codes/ignores",
    },
  ] satisfies TypedConfigItem[];
};
