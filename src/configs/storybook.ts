import type { StorybookOptions, TypedConfigItem } from "../types";

import { extractOptions } from "../utils/extract-options";
import { interopDefault } from "../utils/interop-default";
import { upwarn } from "../utils/upwarn";

export default async function storybookConfig(
  options: boolean | StorybookOptions,
): Promise<TypedConfigItem[]> {
  const extractedOptions = extractOptions(options);
  const { configs } = await interopDefault(import("eslint-plugin-storybook"));

  const [setup, storiesConfig, mainConfig] = configs["flat/recommended"];

  return [
    {
      name: "jimmy.codes/storybook/setup",
      plugins: setup?.plugins,
    },
    {
      files: storiesConfig?.files,
      name: "jimmy.codes/storybook/stories-rules",
      rules: {
        ...upwarn(storiesConfig?.rules),
        "import-x/no-anonymous-default-export": "off",
        "storybook/meta-satisfies-type": "error",
        "unicorn/no-anonymous-default-export": "off",
        ...extractedOptions?.overrides,
      },
    },
    {
      files: mainConfig?.files,
      name: "jimmy.codes/storybook/main-rules",
      rules: {
        ...mainConfig?.rules,
      },
    },
  ];
}
