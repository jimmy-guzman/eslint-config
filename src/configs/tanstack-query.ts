import type { ESLint } from "eslint";

import type { TypedConfigItem } from "../types";

import { GLOB_JSX, GLOB_TSX } from "../constants";
import { interopDefault } from "../utils/interop-default";

export const tanstackQuery = async () => {
  const queryPlugin = await interopDefault(
    import("@tanstack/eslint-plugin-query"),
  );

  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      name: "jimmy.codes/react/query",
      plugins: {
        // TODO: remove unknown conversion when Plugin type is exported by @tanstack/query
        "@tanstack/query": queryPlugin as unknown as ESLint.Plugin,
      },
      rules: {
        "@tanstack/query/exhaustive-deps": "error",
        "@tanstack/query/no-rest-destructuring": "warn",
        "@tanstack/query/stable-query-client": "error",
      },
    },
  ] satisfies TypedConfigItem[];
};
