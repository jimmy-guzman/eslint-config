import type { TypedConfigItem } from "../types";

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
  ] satisfies TypedConfigItem[];
};
