import type { PlaywrightOptions, TypedConfigItem } from "../types";

import { GLOB_PLAYWRIGHT } from "../globs";
import { playwrightRules } from "../rules/playwright";
import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";

export default async function playwrightConfig(
  options: boolean | PlaywrightOptions,
) {
  const extractedOptions = extractOptions(options);

  const playwrightPlugin = await interopDefault(
    import("eslint-plugin-playwright"),
  );

  return [
    {
      ...playwrightPlugin.configs["flat/recommended"],
      files: GLOB_PLAYWRIGHT,
      name: "jimmy.codes/playwright",
      rules: await playwrightRules(extractedOptions),
    },
  ] satisfies TypedConfigItem[];
}
