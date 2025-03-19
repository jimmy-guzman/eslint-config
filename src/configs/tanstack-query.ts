import type { TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { interopDefault } from "../utils/interop-default";

export default async function tanstackQueryConfig() {
  const queryPlugin = await interopDefault(
    import("@tanstack/eslint-plugin-query"),
  );

  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      name: "jimmy.codes/tanstack/react-query",
      plugins: {
        "@tanstack/query": queryPlugin,
      },
      rules: {
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/infinite-query-property-order": "error",
        "@tanstack/query/no-rest-destructuring": "error",
        "@tanstack/query/no-unstable-deps": "error",
        "@tanstack/query/stable-query-client": "error",
      },
    },
  ] satisfies TypedConfigItem[];
}
