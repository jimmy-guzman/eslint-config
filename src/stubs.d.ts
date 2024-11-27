declare module "eslint-config-prettier" {
  import type { Linter } from "eslint";

  const config: {
    rules: Linter.RulesRecord;
  };

  export default config;
}

// TODO: remove when https://github.com/facebook/react/issues/30119 is resolved.
declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Linter } from "eslint";

  const plugin: ESLint.Plugin;
  const recommended: {
    recommended: {
      plugins: Record<string, ESLint.Plugin>;
      rules: {
        "exhaustive-deps": Linter.RuleEntry;
        "rules-of-hooks": Linter.RuleEntry;
      };
    };
  };

  export = { configs: { recommended } };
  export default plugin;
}

declare module "eslint-plugin-jsx-a11y" {
  import type { ESLint, Linter } from "eslint";

  const recommended: Linter.Config;
  const plugin: ESLint.Plugin;

  export = { configs: { recommended } };
  export default plugin;
}

declare module "eslint-plugin-react-refresh" {
  import type { ESLint } from "eslint";

  const plugin: ESLint.Plugin;

  export default plugin;
}

// TODO: remove when https://github.com/eslint-community/eslint-plugin-eslint-comments/issues/214 is resolved.
declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  import type { Linter } from "eslint";

  const recommended: Linter.Config;

  export = { recommended };
}

declare module "eslint-plugin-react-compiler" {
  import type { ESLint } from "eslint";

  const plugin: ESLint.Plugin;

  export default plugin;
}
