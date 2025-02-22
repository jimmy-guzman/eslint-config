# @jimmy.codes/eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/eslint-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://semantic-release.gitbook.io/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)

> 🔍 another opinionated [eslint](https://eslint.org) config

## 🛠️ Usage

> [!NOTE]
> For a better experience, make sure to use [@jimmy.codes/prettier-config](https://github.com/jimmy-guzman/prettier-config) as well.

### 🔨 Getting Started

First install the package, by running the following:

```
pnpm add -D @jimmy.codes/eslint-config
```

Then all you need to in your `eslint.config.js` is:

```mjs
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig();
```

Which will enable rules based on your project dependencies.

### 🔧 Configuration

This package contains rules that can be enabled or disabled as follows:

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

Or you can turn off auto detection to disable rules based on a project's dependencies:

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig({ autoDetect: false });
```

#### Extending/overriding the Configuration

You can also extend or override the configuration:

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

Or pass configs as additional arguments:

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

#### Ignores

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
