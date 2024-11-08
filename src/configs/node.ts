import nodePlugin from "eslint-plugin-n";

import type { TypedConfigItem } from "../types";

import { nodeRules } from "../rules/node";

export const nodeConfig = () => {
  return [
    {
      name: "jimmy.codes/node",
      plugins: {
        n: nodePlugin,
      },
      rules: nodeRules,
    },
  ] satisfies TypedConfigItem[];
};
