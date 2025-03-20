import stylisticPlugin from "@stylistic/eslint-plugin";

import type { TypedConfigItem } from "../types";

import { stylisticRules } from "../rules/stylistic";

export default function stylisticConfig() {
  return [
    {
      name: "jimmy.codes/stylistic",
      plugins: {
        "@stylistic": stylisticPlugin,
      },
      rules: stylisticRules,
    },
  ] satisfies TypedConfigItem[];
}
