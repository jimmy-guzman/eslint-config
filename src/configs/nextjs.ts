import type { NextJSOptions, TypedConfigItem } from "../types";

import { GLOB_NEXTJS } from "../globs";
import { nextjsRules } from "../rules/nextjs";
import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";

export default async function nextjsConfig(options: boolean | NextJSOptions) {
  const extractedOptions = extractOptions(options);

  const nextjsPlugin = await interopDefault(import("@next/eslint-plugin-next"));

  return [
    {
      files: GLOB_NEXTJS,
      name: "jimmy.codes/nextjs",
      plugins: {
        "@next/next": nextjsPlugin,
      },
      rules: await nextjsRules(extractedOptions),
    },
  ] satisfies TypedConfigItem[];
}
