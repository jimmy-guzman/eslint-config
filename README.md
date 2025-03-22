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

## Plugins Used

This config includes the following plugins:

| Plugin                                                                                                                | Purpose                            |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`@eslint-community/eslint-plugin-eslint-comments`](https://eslint-community.github.io/eslint-plugin-eslint-comments) | ESLint directive comments          |
| [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/)                                                            | Modern React linting               |
| [`@eslint/js`](https://eslint.org/docs/latest/rules/)                                                                 | Core ESLint rules                  |
| [`@next/eslint-plugin-next`](https://nextjs.org/docs/basic-features/eslint)                                           | Next.js best practices             |
| [`@stylistic/eslint-plugin`](https://eslint.style/)                                                                   | Consistent formatting              |
| [`@tanstack/eslint-plugin-query`](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)                  | TanStack Query rules               |
| [`@vitest/eslint-plugin`](https://github.com/vitest-dev/eslint-plugin-vitest)                                         | Vitest support                     |
| [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)                                        | Disable formatting conflicts       |
| [`eslint-plugin-astro`](https://ota-meshi.github.io/eslint-plugin-astro/)                                             | Astro framework support            |
| [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x)                                           | Import order and hygiene           |
| [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)                                          | Jest support                       |
| [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom)                                 | DOM assertions for tests           |
| [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)                                                 | JSDoc comment rules                |
| [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                                      | Accessibility in JSX               |
| [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)                                              | Node.js-specific rules             |
| [`eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist)                               | Sorting and consistency            |
| [`eslint-plugin-playwright`](https://github.com/playwright-community/eslint-plugin-playwright)                        | Playwright testing support         |
| [`eslint-plugin-react-compiler`](https://www.npmjs.com/package/eslint-plugin-react-compiler)                          | React Compiler rules               |
| [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)                                | Enforce React Hooks rules          |
| [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)                           | Safe Fast Refresh boundaries       |
| [`eslint-plugin-regexp`](https://ota-meshi.github.io/eslint-plugin-regexp/)                                           | RegExp best practices              |
| [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook)                                   | Storybook support                  |
| [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)                   | Testing Library rules              |
| [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)                                      | Modern JavaScript best practices   |
| [`typescript-eslint`](https://typescript-eslint.io/)                                                                  | TypeScript linting and type safety |

---

## Contributing

PRs and issues welcome.

---

## Credits

Inspired by:

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://antfu.me)
- [@pvtnbr/eslint-config](https://github.com/privatenumber/eslint-config) by [Hiroki Osame](https://hirok.io)
