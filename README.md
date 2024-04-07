# @jimmy.codes/eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/eslint-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://semantic-release.gitbook.io/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)

> 🔍 my personal [eslint](https://eslint.org/) config

_This is an evolution of [eslint-config-jimmy-guzman](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman)_

## 🛠️ Usage

### 🔨 Getting Started

First install the package, by running the following:

```
pnpm add -D @jimmy.codes/eslint-config
```

Then if you want a simple configuration:

```js
// eslint.config.mjs
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes();
```

And if you're using [VS Code](https://code.visualstudio.com), make sure to enable [flat configuration](https://eslint.org/docs/v8.x/use/configure/configuration-files-new):

```jsonc
// .vscode/settings.json
{
  "eslint.experimental.useFlatConfig": true,
}
```

### 🔧 Configuration

This package contains rules that can be enabled or disabled as follows:

```js
// eslint.config.mjs
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  /**
   * Wether or not TypeScript rules are enabled?
   * @default false
   */
  typescript: false,
  /**
   * Are React rules are enabled?
   * @default false
   */
  react: false,
  /**
   * Are imports rules are enabled?
   * @default true
   */
  imports: true,
  /**
   * Are Jest rules are enabled?
   * @default false
   */
  jest: false,
  /**
   * Are Vitest rules are enabled?
   * @default false
   */
  vitest: false,
  /**
   * Are Testing Library rules are enabled?
   * @default false
   */
  testingLibrary: false,
});
```

Or if you want to extend or override the configuration:

```js
// eslint.config.mjs
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  overrides: [
    {
      rules: {
        "prefer-const": "error",
      },
    },
    {
      files: ["/**/*.js"],
      rules: {
        semi: "error",
      },
    },
  ],
});
```

## ⭐️ Credits

- [antfu/eslint-config](https://github.com/antfu/eslint-config) by [@antfu](https://antfu.me/)
