import globals from "globals";

import { GLOB_CJS } from "../constants";
import { type TypedConfigItem } from "../types";

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
