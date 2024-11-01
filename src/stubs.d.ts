/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module "eslint-config-prettier" {
  type Rules = import("eslint").Linter.RulesRecord;

  interface Config {
    rules: Rules;
  }

  declare const config: Config;

  export default config;
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
  type LanguageOptions = import("eslint").Linter.Config["languageOptions"];

  const plugin: Plugin;

  interface Configs {
    "flat/recommended": {
      languageOptions: LanguageOptions;
      plugins: string[];
      rules: Rules;
    };
    "flat/style": {
      languageOptions: LanguageOptions;
      plugins: string[];
      rules: Rules;
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
  type LanguageOptions = import("eslint").Linter.Config["languageOptions"];

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
