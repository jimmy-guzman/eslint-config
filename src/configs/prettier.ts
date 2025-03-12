import eslintConfigPrettier from "eslint-config-prettier/flat";

import type { TypedConfigItem } from "../types";

export const prettierConfig = () => {
  return [
    { ...eslintConfigPrettier, name: "jimmy.codes/prettier" },
  ] satisfies TypedConfigItem[];
};
