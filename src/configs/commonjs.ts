import globals from "globals";

import { GLOB_CJS } from "../constants";

export const commonjsConfig = () => {
  return [
    {
      name: "jimmy.codes/commonjs",
      files: [GLOB_CJS],
      languageOptions: {
        globals: globals.commonjs,
      },
    },
  ];
};
