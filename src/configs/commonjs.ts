import globals from "globals";

import { GLOB_CJS } from "../constants";
import { type FlatConfigItem } from "../types";

export const commonjsConfig = () => {
  return [
    {
      name: "jimmy.codes/commonjs",
      files: [GLOB_CJS],
      languageOptions: {
        globals: globals.commonjs,
      },
    },
  ] satisfies FlatConfigItem[];
};
