import type { NextJSOptions, TypedConfigItem } from "../types";

import { GLOB_NEXTJS, GLOB_NEXTJS_ENV } from "../globs";
import { nextjsRules } from "../rules/nextjs";
import { extractOptions } from "../utils/extract-options";
import { unwrapDefault } from "../utils/interop-default";

export default async function nextjsConfig(options: boolean | NextJSOptions) {
  const extractedOptions = extractOptions(options);

  const nextjsPlugin = await unwrapDefault(import("@next/eslint-plugin-next"));

  return [
    {
      files: GLOB_NEXTJS,
      name: "jimmy.codes/nextjs",
      plugins: {
        "@next/next": nextjsPlugin,
      },
      rules: await nextjsRules(extractedOptions),
    },
    {
      files: GLOB_NEXTJS_ENV,
      rules: {
        "import-x/extensions": "off",
      },
    },
  ] satisfies TypedConfigItem[];
}
