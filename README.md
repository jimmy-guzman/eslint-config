# @jimmy.codes/eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/eslint-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://semantic-release.gitbook.io/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)

> 🔍 another opinionated [eslint](https://eslint.org) config

_This is an evolution of [eslint-config-jimmy-guzman](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman)_

## 🛠️ Usage

_For a better experience, make sure to use [@jimmy.codes/prettier-config](https://github.com/jimmy-guzman/prettier-config) as well_

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
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  /**
   * Are TypeScript rules are enabled?
   * @default false
   */
  typescript: true,
  /**
   * Are React rules are enabled?
   * @default false
   */
  react: true,
  /**
   * Are testing rules are enabled?
   * @default false
   */
  testing: true,
});
```

#### TypeScript

You can also change the project location which can be helpful for monorepos:

```js
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  typescript: {
    project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
  },
});
```

#### Testing

By default [vitest](https://vitest.dev) is used as the testing framework but you can override and add additional rules for utilities:

```js
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  testing: {
    framework: "jest",
    utilities: ["testing-library"],
  },
});
```

#### React

You can add additional rules for utilities:

```js
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  react: {
    utilities: ["@tanstack/query"],
  },
});
```

#### Overrides

You can also extend or override the configuration:

```js
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

## ❤️ Credits

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://antfu.me)
- [@pvtnbr/eslint-config](https://github.com/privatenumber/eslint-config) by [Hiroki Osame](https://hirok.io/)
