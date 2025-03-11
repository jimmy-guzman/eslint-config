declare module "eslint-config-prettier" {
  import type { Linter } from "eslint";

  const config: {
    rules: Linter.RulesRecord;
  };

  export default config;
}

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

declare module "@next/eslint-plugin-next" {
  import type { ESLint, Linter } from "eslint";

  const recommended: Linter.Config;
  const coreWebVitals: Linter.Config;
  const plugin: ESLint.Plugin;

  export = { configs: { "core-web-vitals": coreWebVitals, recommended } };
  export default plugin;
}
