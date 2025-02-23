# @jimmy.codes/eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/eslint-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://semantic-release.gitbook.io/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)

> 🔍 A pragmatic and opinionated [ESLint](https://eslint.org) config for modern development.

## 🚀 Philosophy

A strict yet ergonomic ESLint config that ensures **clean, maintainable, and modern** JavaScript and TypeScript codebases.

- **🛡️ Prevent Bugs** – Enforce safe patterns and strict error handling.
- **🌟 Modern JavaScript** – Prefer concise, expressive, and maintainable syntax.
- **⚡ Performance & Maintainability** – Eliminate redundancy and enforce efficient patterns.
- **🧹 Consistency** – Keep code structured, readable, and free of clutter.
- **🧪 Reliable Testing** – Enforce best practices for Vitest, Jest, Playwright, and Testing Library.
- **⚛️ Optimized React** – Ensure predictable rendering, hook safety, and component clarity.

## 🛠️ Usage

> [!NOTE]  
> For a better experience, use [@jimmy.codes/prettier-config](https://github.com/jimmy-guzman/prettier-config) as well.

### 🔨 Getting Started

Install the package:

```
pnpm add -D @jimmy.codes/eslint-config
```

Then, in your `eslint.config.js`, simply add:

```mjs
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig();
```

This automatically applies rules **based on your installed dependencies**.

### 🔧 Configuration

By default, this config **auto-detects** relevant rules based on your dependencies (`react`, `vitest`, etc.).  
To disable this behavior:

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig({ autoDetect: false });
```

#### **Manually Enable/Disable Rule Sets**

You can explicitly enable or disable rule sets:

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

#### **Extending/Overriding the Configuration**

Use the `overrides` option:

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

Alternatively, pass multiple configurations as separate arguments:

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

#### **Ignoring Files**

Extend ignored files:

```ts
import eslintConfig from "@jimmy.codes/eslint-config";

export default eslintConfig({
  ignores: ["**/*.mjs"],
});
```

## 💬 Want to Contribute or Suggest Changes?

PRs and discussions are welcome! Open an issue if you have suggestions.

## ❤️ Credits

This config is inspired by:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://antfu.me)
- [@pvtnbr/eslint-config](https://github.com/privatenumber/eslint-config) by [Hiroki Osame](https://hirok.io)
