import { GLOB_NEXTJS } from "../constants";
import { nextjsRules } from "../rules/nextjs";
import { interopDefault } from "../utils/interop-default";

export default async function nextjsConfig() {
  const nextjsPlugin = await interopDefault(import("@next/eslint-plugin-next"));

  return [
    {
      files: GLOB_NEXTJS,
      name: "jimmy.codes/nextjs",
      plugins: {
        "@next/next": nextjsPlugin,
      },
      rules: await nextjsRules(),
    },
  ];
}
