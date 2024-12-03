import type { Rules } from "../types";

import { interopDefault } from "../utils/interop-default";

export const nextjsRules = async () => {
  const nextjsPlugin = await interopDefault(import("@next/eslint-plugin-next"));

  return {
    ...nextjsPlugin.configs["core-web-vitals"].rules,
  } satisfies Rules;
};
