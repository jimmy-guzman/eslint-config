/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module "eslint-plugin-simple-import-sort" {
  type Plugin = import("eslint").ESLint.Plugin;

  const plugin: Plugin;

  export default plugin;
}

declare module "eslint-config-prettier" {
  type Rules = import("eslint").Linter.RulesRecord;

  interface Config {
    rules: Rules;
  }

  declare const config: Config;

  export default config;
}

declare module "eslint-plugin-react" {
  type Plugin = import("eslint").ESLint.Plugin;

  const plugin: Plugin;

  export default plugin;
}

declare module "eslint-plugin-node-import" {
  type Plugin = import("eslint").ESLint.Plugin;

  const plugin: Plugin;

  export default plugin;
}

declare module "eslint-plugin-react-hooks" {
  type Plugin = import("eslint").ESLint.Plugin;
  type Rules = import("eslint").Linter.RulesRecord;

  const plugin: Plugin;

  interface Configs {
    recommended: {
      plugins: string[];
      rules: Rules;
    };
  }

  export const configs: Configs;

  export const rules: Plugin["rules"];
}

declare module "eslint-plugin-jsx-a11y" {
  type Plugin = import("eslint").ESLint.Plugin;
  type Rules = import("eslint").Linter.RulesRecord;

  const plugin: Plugin;

  interface Configs {
    recommended: {
      plugins: string[];
      rules: Rules;
    };
  }

  export const configs: Configs;

  export const rules: Plugin["rules"];
}

declare module "eslint-plugin-jest" {
  type Plugin = import("eslint").ESLint.Plugin;
  type Rules = import("eslint").Linter.RulesRecord;
  type LanguageOptions = import("eslint").Linter.FlatConfig["languageOptions"];

  const plugin: Plugin;

  interface Configs {
    "flat/recommended": {
      plugins: string[];
      rules: Rules;
      languageOptions: LanguageOptions;
    };
    "flat/style": {
      plugins: string[];
      rules: Rules;
      languageOptions: LanguageOptions;
    };
  }

  export const configs: Configs;

  export const rules: Plugin["rules"];
}

declare module "eslint-plugin-testing-library" {
  type Plugin = import("eslint").ESLint.Plugin;
  type Rules = import("eslint").Linter.RulesRecord;

  const plugin: Plugin;

  interface Configs {
    react: {
      plugins: string[];
      rules: Rules;
    };
  }

  export const configs: Configs;

  export const rules: Plugin["rules"];
}

declare module "eslint-plugin-jest-dom" {
  type Plugin = import("eslint").ESLint.Plugin;
  type Rules = import("eslint").Linter.RulesRecord;
  type LanguageOptions = import("eslint").Linter.FlatConfig["languageOptions"];

  const plugin: Plugin;

  interface Configs {
    "flat/recommended": {
      plugins: string[];
      rules: Rules;
    };
  }

  export const configs: Configs;

  export default Plugin;
}

declare module "eslint-plugin-react-refresh" {
  type Plugin = import("eslint").ESLint.Plugin;

  const plugin: Plugin;

  export default plugin;
}
