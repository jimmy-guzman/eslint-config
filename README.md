# @jimmy.codes/eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/eslint-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://semantic-release.gitbook.io/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)

> 🔍 A pragmatic and opinionated [ESLint](https://eslint.org) config for modern development.

## **✨ Features**

- **📡 Auto-detects your stack** – Supports React, TypeScript, Astro, Next.js, Vitest, Jest, Playwright, Storybook, and TanStack Query.
- **⚡ Efficient & lightweight** – Dynamically imports configs for better performance.
- **🛠️ Works out of the box** – No manual setup required for most projects.
- **🎛️ Fully customizable** – Override, extend, or disable rules to fit your needs.
- **🔄 Always up to date** – Evolves with the latest ESLint, TypeScript, and framework best practices.

---

## **🚀 Philosophy**

A strict yet ergonomic ESLint config that ensures **clean, maintainable, and modern** JavaScript and TypeScript codebases.

- **🛡️ Code safety first** – Enforce patterns that prevent runtime errors and unexpected behavior.
- **📜 Embrace modern JavaScript** – Prefer maintainable, expressive, and future-proof code.
- **⚙️ Optimized for performance** – Loads only relevant configs to keep linting fast.
- **📏 Consistency without rigidity** – Prioritizes structure and readability over personal opinions.
- **🧪 Built for testing** – Enforces best practices for Vitest, Jest, Playwright, and Testing Library.

## 🛠️ Usage

> [!NOTE]  
> For a better experience, use [@jimmy.codes/prettier-config](https://github.com/jimmy-guzman/prettier-config) as well.

### 🔨 Getting Started

Install the package:

```sh
pnpm add -D @jimmy.codes/eslint-config
```

Then, in your `eslint.config.ts`, simply add:

```mjs
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig();
```

This automatically applies rules **based on your installed dependencies**.

### 🔧 Configuration

By default, this config **auto-detects** relevant rules based on your dependencies (`react`, `vitest`, etc.).  
To disable this behavior:

```ts
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig({ autoDetect: false });
```

#### **Manually Enable/Disable Rule Sets**

You can explicitly enable or disable rule sets:

```ts
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig({
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
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig({
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
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig(
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
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig({
  ignores: ["**/*.mjs"],
});
```

---

## 💬 Want to Contribute or Suggest Changes?

PRs and discussions are welcome! Open an issue if you have suggestions.

---

## ❤️ Credits

This config is inspired by:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://antfu.me)
- [@pvtnbr/eslint-config](https://github.com/privatenumber/eslint-config) by [Hiroki Osame](https://hirok.io)
