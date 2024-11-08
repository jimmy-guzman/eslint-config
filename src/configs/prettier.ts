import eslintConfigPrettier from "eslint-config-prettier";

import type { TypedConfigItem } from "../types";

export const prettierConfig = () => {
  return [
    { name: "jimmy.codes/prettier", ...eslintConfigPrettier },
  ] satisfies TypedConfigItem[];
};
