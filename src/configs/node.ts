import type { Linter } from "eslint";

import nodePlugin from "eslint-plugin-n";

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
  ] satisfies Linter.Config[];
};
