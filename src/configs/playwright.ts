import { GLOB_PLAYWRIGHT } from "../constants";
import { playwrightRules } from "../rules/playwright";
import { interopDefault } from "../utils/interop-default";

export default async function playwrightConfig() {
  const playwrightPlugin = await interopDefault(
    import("eslint-plugin-playwright"),
  );

  return [
    {
      ...playwrightPlugin.configs["flat/recommended"],
      files: GLOB_PLAYWRIGHT,
      name: "jimmy.codes/playwright",
      rules: await playwrightRules(),
    },
  ];
}
