import fs from "node:fs/promises";

import { flatConfigsToRulesDTS } from "eslint-typegen/core";
import { builtinRules } from "eslint/use-at-your-own-risk";

import { defineConfig } from "../src";

const configs = await defineConfig({
  jest: true,
});

const ruleDts = await flatConfigsToRulesDTS(
  [
    {
      plugins: {
        "": {
          rules: Object.fromEntries(builtinRules.entries()),
        },
      },
    },
    // @ts-expect-error TODO: config types don't seem to match
    ...configs,
  ],
  {
    includeAugmentation: false,
  },
);

await fs.writeFile("src/rules.gen.d.ts", ruleDts);
