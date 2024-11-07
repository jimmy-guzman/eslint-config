import type { Linter } from "eslint";

import { javascriptRules } from "../rules/javascript";

export const javascriptConfig = () => {
  return [
    {
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      name: "jimmy.codes/javascript",
      rules: javascriptRules,
    },
  ] satisfies Linter.Config[];
};
