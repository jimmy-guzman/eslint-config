import type { Rules } from "../types";

import { interopDefault } from "../utils/interop-default";
import { upwarn } from "../utils/upwarn";

export default async function storybookConfig() {
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
        "unicorn/no-anonymous-default-export": "off",
      } satisfies Rules,
    },
    {
      files: mainConfig?.files,
      name: "jimmy.codes/storybook/main-rules",
      rules: {
        ...mainConfig?.rules,
      } satisfies Rules,
    },
  ];
}
