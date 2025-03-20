# @jimmy.codes/eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/eslint-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/eslint-config)
[![downloads](https://img.shields.io/npm/dm/@jimmy.codes/eslint-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/eslint-config)

> A simple, modern ESLint config that covers most use cases.

## **Why Use This?**

A strict-but-practical ESLint config that **doesn’t require much thought**. It works out of the box, adapts to your stack, and enforces good patterns without getting in the way.

- **Auto-detects dependencies** – Handles React, TypeScript, Astro, Next.js, Vitest, Jest, Playwright, Storybook, and TanStack Query.
- **Prevents real issues** – Focuses on rules that actually matter.
- **Fast & lightweight** – Loads only what’s needed, so it won’t slow you down.
- **No setup needed** – Install it, import it, done.
- **Customizable** – Turn off what you don’t need.
- **Works with tests** – Supports Vitest, Jest, Playwright, and Testing Library.
- **Encourages modern JS** – Keeps things clean and readable.

---

## Installation & Usage

> [!NOTE]  
> Works best with [@jimmy.codes/prettier-config](https://github.com/jimmy-guzman/prettier-config).

### Install

```sh
pnpm add -D @jimmy.codes/eslint-config
```

### Basic Setup

Add this to `eslint.config.ts`:

```mjs
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig();
```

It’ll auto-configure based on your installed dependencies.

---

## Customization

### Disable Auto-Detection

```ts
import { defineConfig } from "@jimmy.codes/eslint-config";

export default defineConfig({ autoDetect: false });
```

### Enable/Disable Rule Sets

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

### Override Specific Rules

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

---

## Contributing

PRs and issues welcome.

---

## Credits

Inspired by:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://antfu.me)
- [@pvtnbr/eslint-config](https://github.com/privatenumber/eslint-config) by [Hiroki Osame](https://hirok.io)
