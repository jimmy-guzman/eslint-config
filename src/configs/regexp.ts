import * as regexpPlugin from "eslint-plugin-regexp";

import type { TypedConfigItem } from "../types";

import { regexpRules } from "../rules/regexp";

export const regexpConfig = () => {
  return [
    {
      name: "jimmy.codes/regexp",
      plugins: { regexp: regexpPlugin },
      rules: regexpRules,
    },
  ] satisfies TypedConfigItem[];
};
