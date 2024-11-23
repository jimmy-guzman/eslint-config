import { GLOB_PLAYWRIGHT } from "../constants";
import { playwrightRules } from "../rules/playwright";
import { interopDefault } from "../utils/interop-default";

export const playwrightConfig = async () => {
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
};
