import stylisticPlugin from "@stylistic/eslint-plugin";
import stylisticJsx from "@stylistic/eslint-plugin-jsx";

import type { TypedConfigItem } from "../types";

import { stylisticRules } from "../rules/stylistic";

export default function stylisticConfig() {
  return [
    {
      name: "jimmy.codes/stylistic",
      plugins: {
        "@stylistic": stylisticPlugin,
        "@stylistic/jsx": stylisticJsx,
      },
      rules: stylisticRules,
    },
  ] satisfies TypedConfigItem[];
}
