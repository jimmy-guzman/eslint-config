declare module "eslint-config-prettier" {
  import type { Linter } from "eslint";

  interface Config {
    rules: Linter.RulesRecord;
  }

  declare const config: Config;

  export default config;
}

declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Linter } from "eslint";

  const plugin: ESLint.Plugin;

  interface Configs {
    recommended: {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
  }

  export const configs: Configs;
  export const rules: ESLint.Plugin["rules"];
}

declare module "eslint-plugin-jsx-a11y" {
  import type { ESLint, Linter } from "eslint";

  interface Configs {
    recommended: {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
  }

  export const configs: Configs;
  export const rules: ESLint.Plugin["rules"];
}

declare module "eslint-plugin-jest" {
  import type { ESLint, Linter } from "eslint";

  type LanguageOptions = Linter.Config["languageOptions"];

  interface Configs {
    "flat/recommended": {
      languageOptions: LanguageOptions;
      plugins: string[];
      rules: Linter.RulesRecord;
    };
    "flat/style": {
      languageOptions: LanguageOptions;
      plugins: string[];
      rules: Linter.RulesRecord;
    };
  }

  export const configs: Configs;
  export const rules: ESLint.Plugin["rules"];
}

declare module "eslint-plugin-testing-library" {
  import type { ESLint, Linter } from "eslint";

  interface Configs {
    react: {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
  }

  export const configs: Configs;
  export const rules: ESLint.Plugin["rules"];
}

declare module "eslint-plugin-jest-dom" {
  import type { ESLint, Linter } from "eslint";

  interface Configs {
    "flat/recommended": {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
  }

  export const configs: Configs;
  export default ESLint.Plugin;
}

declare module "eslint-plugin-react-refresh" {
  import type { ESLint } from "eslint";

  export default ESLint.Plugin;
}

// TODO: remove when https://github.com/eslint-community/eslint-plugin-eslint-comments/issues/214 is resolved.

declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  import type { Linter } from "eslint";

  declare namespace Configs {
    import defaultExports = Configs;

    export const recommended: Linter.Config;

    export { defaultExports as default };
  }

  export = Configs;
}
