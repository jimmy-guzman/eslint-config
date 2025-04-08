import type { Rules } from "../types";

import { interopDefault } from "../utils/interop-default";

export const playwrightRules = async () => {
  const playwrightPlugin = await interopDefault(
    import("eslint-plugin-playwright"),
  );

  return {
    ...playwrightPlugin.configs["flat/recommended"].rules,
    "playwright/expect-expect": "error",
    "playwright/max-nested-describe": "error",
    "playwright/no-conditional-expect": "error",
    "playwright/no-conditional-in-test": "error",
    "playwright/no-element-handle": "error",
    "playwright/no-eval": "error",
    "playwright/no-force-option": "error",
    "playwright/no-nested-step": "error",
    "playwright/no-page-pause": "error",
    "playwright/no-skipped-test": "error",
    "playwright/no-slowed-test": "error",
    "playwright/no-useless-await": "error",
    "playwright/no-useless-not": "error",
    "playwright/no-wait-for-selector": "error",
    "playwright/no-wait-for-timeout": "error",
    "playwright/valid-title": [
      "error",
      {
        mustMatch: {
          it: "^should",
        },
      },
    ],
  } satisfies Rules;
};
