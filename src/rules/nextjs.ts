import type { NextJSOptions, Rules } from "../types";

import { unwrapDefault } from "../utils/interop-default";
import { upwarn } from "../utils/upwarn";

export const nextjsRules = async (options?: NextJSOptions) => {
  const nextjsPlugin = await unwrapDefault(import("@next/eslint-plugin-next"));

  return {
    ...upwarn(nextjsPlugin.configs.recommended.rules),
    ...options?.overrides,
  } satisfies Rules;
};
