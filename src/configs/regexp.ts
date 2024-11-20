import * as regexpPlugin from "eslint-plugin-regexp";

import { regexpRules } from "../rules/regexp";

export const regexpConfig = () => {
  return [
    {
      name: "jimmy.codes/regexp",
      plugins: { regexp: regexpPlugin },
      rules: regexpRules,
    },
  ];
};
