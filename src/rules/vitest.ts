import type { Rules } from "../types";

import { ALLOWED_VITEST_FUNCS } from "../constants";
import { jestRules } from "./jest";

export const vitestRules = async () => {
  return {
    ...(await jestRules()),
    "jest/no-deprecated-functions": "off",
    "jest/require-hook": [
      "error",
      {
        allowedFunctionCalls: ALLOWED_VITEST_FUNCS,
      },
    ],
  } satisfies Rules;
};
