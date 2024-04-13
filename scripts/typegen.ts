import fs from "node:fs/promises";

import { builtinRules } from "eslint/use-at-your-own-risk";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";

import config from "../src";

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
    ...config({ autoDetect: true }),
  ],
  {
    includeAugmentation: false,
  },
);

await fs.writeFile("src/rules.gen.d.ts", ruleDts);
