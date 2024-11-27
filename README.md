# @jimmy.codes/eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/eslint-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://semantic-release.gitbook.io/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)

> 🔍 Another opinionated [ESLint](https://eslint.org) config

## 🛠️ Usage

> [!NOTE]
> For a better experience, make sure to use [@jimmy.codes/prettier-config](https://github.com/jimmy-guzman/prettier-config) as well.

### 🔨 Getting Started

First, install the package:

```
pnpm add -D @jimmy.codes/eslint-config
```

Then, in your `eslint.config.js`, simply add:

```mjs
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig();
```

This automatically applies rules based on your installed dependencies.

### 🔧 Configuration

By default, this config automatically enables rules based on your installed dependencies (e.g., `react`, `vitest`). Set `autoDetect: false` to disable this behavior.

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig({ autoDetect: false });
```

You can also manually enable or disable specific rule sets:

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig({
  astro: false,
  jest: false,
  nextjs: false,
  playwright: false,
  react: false,
  storybook: false,
  tanstackQuery: false,
  testingLibrary: false,
  typescript: false,
  vitest: false,
});
```

#### Extending/Overriding the Configuration

You can extend or override the configuration using the `overrides` option:

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig({
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "prefer-spread": "error",
      },
    },
    {
      files: ["**/*.ts"],
      rules: {
        "prefer-const": "error",
      },
    },
  ],
});
```

Alternatively, you can pass additional configurations as separate arguments:

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig(
  {},
  {
    files: ["**/*.js"],
    rules: {
      "prefer-spread": "error",
    },
  },
  {
    files: ["**/*.ts"],
    rules: {
      "prefer-const": "error",
    },
  },
);
```

> This approach is useful if you prefer to separate rule overrides into multiple objects instead of nesting them inside `overrides`.

#### Ignoring Files

You can also extend what is ignored:

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig({
  ignores: ["**/*.mjs"],
});
```

## ❤️ Credits

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://antfu.me)
- [@pvtnbr/eslint-config](https://github.com/privatenumber/eslint-config) by [Hiroki Osame](https://hirok.io/)
