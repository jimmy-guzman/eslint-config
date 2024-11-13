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

Then if you want a simple configuration:

```js
// eslint.config.mjs
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes();
```

Or if you want to use [TypeScript configuration files](https://eslint.org/docs/latest/use/configure/configuration-files#typescript-configuration-files), you can do the following:

Add `--flag unstable_ts_config` to your eslint script, for example:

```json
{
  "scripts": {
    "lint": "eslint --flag unstable_ts_config ."
  }
}
```

And add the following to your `.vscode/settings.json`:

```json
"eslint.options": {
  "flags": ["unstable_ts_config"]
}
```

### 🔧 Configuration

> [!NOTE]
> By default all rules are enabled based on the project's dependencies.

This package contains rules that can be enabled or disabled as follows:

```js
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  /**
   * Are TypeScript rules enabled?
   * @default false
   */
  typescript: true,
  /**
   * Are React rules enabled?
   * @default false
   */
  react: true,
  /**
   * Are Astro rules enabled?
   * @default false
   */
  astro: true,
  /**
   * Are testing rules enabled?
   * @default false
   */
  testing: true,
});
```

Or you can turn off auto detection to disable rules based on a project's dependencies:

```js
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({ autoDetect: false });
```

#### TypeScript

You can also change the project location which can be helpful for monorepos:

> [!WARNING]
> This is [not recommended nor needed since the introduction of `projectService`](https://typescript-eslint.io/getting-started/typed-linting#can-i-customize-the-tsconfig-used-for-typed-linting) which this config uses by default.

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

#### Extending the Configuration

You can also extend the configuration:

```js
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes(
  {
    configs: [
      {
        files: ["**/*.js"],
        rules: {
          "prefer-spread": "error",
        },
      },
    ],
  },
  {
    rules: {
      "prefer-const": "error",
    },
  },
);
```

You can also extend what is ignored:

```ts
import jimmyDotCodes from "@jimmy.codes/eslint-config";

export default jimmyDotCodes({
  ignores: ["**/*.mjs"],
});
```

## ❤️ Credits

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://antfu.me)
- [@pvtnbr/eslint-config](https://github.com/privatenumber/eslint-config) by [Hiroki Osame](https://hirok.io/)
