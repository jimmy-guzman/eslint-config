import globals from "globals";

import type { TypedConfigItem } from "../types";

import { GLOB_CJS } from "../constants";

export const commonjsConfig = () => {
  return [
    {
      files: [GLOB_CJS],
      languageOptions: {
        globals: globals.commonjs,
      },
      name: "jimmy.codes/commonjs",
    },
  ] satisfies TypedConfigItem[];
};
