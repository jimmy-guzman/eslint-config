import type { Rules } from "../types";

import { interopDefault } from "../utils/interop-default";
import { upwarn } from "../utils/upwarn";

export const nextjsRules = async () => {
  const nextjsPlugin = await interopDefault(import("@next/eslint-plugin-next"));

  return upwarn(nextjsPlugin.configs.recommended.rules) satisfies Rules;
};
