import regexp from "eslint-plugin-regexp";

import type { TypedConfigItem } from "../types";

import { regexpRules } from "../rules/regexp";

export const regexpConfig = () => {
  return [
    {
      name: "jimmy.codes/regexp",
      plugins: { regexp },
      rules: regexpRules,
    },
  ] satisfies TypedConfigItem[];
};
