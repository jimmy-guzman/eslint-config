import type { Rules } from "../types";

import { interopDefault } from "../utils/interop-default";
import { warningAsErrors } from "../utils/warnings-as-errors";

export const nextjsRules = async () => {
  const nextjsPlugin = await interopDefault(import("@next/eslint-plugin-next"));

  return warningAsErrors(
    nextjsPlugin.configs.recommended.rules,
  ) satisfies Rules;
};
