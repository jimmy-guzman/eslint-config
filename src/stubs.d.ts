// TODO: remove when https://github.com/eslint-community/eslint-plugin-eslint-comments/issues/214 is resolved.
declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  import type { Linter } from "eslint";

  const recommended: Linter.Config;

  export = { recommended };
}
