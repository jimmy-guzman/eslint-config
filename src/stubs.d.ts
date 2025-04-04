declare module "eslint-plugin-jsx-a11y" {
  import type { ESLint, Linter } from "eslint";

  const recommended: Linter.Config;
  const plugin: ESLint.Plugin;

  export = { configs: { recommended } };
  export default plugin;
}

// TODO: remove when https://github.com/eslint-community/eslint-plugin-eslint-comments/issues/214 is resolved.
declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  import type { Linter } from "eslint";

  const recommended: Linter.Config;

  export = { recommended };
}

// TODO: remove if/when https://github.com/vercel/next.js/discussions/74957 is implemented.
declare module "@next/eslint-plugin-next" {
  import type { ESLint, Linter } from "eslint";

  const recommended: Linter.Config;
  const coreWebVitals: Linter.Config;
  const plugin: ESLint.Plugin;

  export = { configs: { "core-web-vitals": coreWebVitals, recommended } };
  export default plugin;
}
