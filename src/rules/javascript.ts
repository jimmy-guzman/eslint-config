import eslint from "@eslint/js";

import type { Rules } from "../types";

export const additionalRules = {
  "array-callback-return": [
    "error",
    {
      allowImplicit: true, // Allow implicit return for flexibility while enforcing return consistency
    },
  ],
  "arrow-body-style": ["error", "always"], // Enforce `{}` in arrow functions for consistency (open to revisiting)
  "class-methods-use-this": "error", // Ensures class methods are used within their class (avoids unnecessary methods)
  "consistent-return": "error", // Prevents inconsistent function returns (e.g., sometimes returning `undefined`)
  "curly": ["error", "all"], // Enforce `{}` around all control statements (avoids accidental bugs)
  "default-case": "error", // Require `default` case in switch statements (prevents unintended fallthrough)
  "default-case-last": "error", // Ensure the `default` case is the last one in `switch`
  "no-console": "warn", // Allow logging in development, but should be reviewed for production builds
  "no-implicit-coercion": "error", // Prevents shorthand type conversions (e.g., `!!value`, `+var`)
  "no-implicit-globals": "error", // Prevents defining variables in the global scope
  "no-loop-func": "error", // Disallow function declarations inside loops (prevents scoping issues)
  "no-magic-numbers": ["error", { ignore: [0, 1, -1, 2] }], // Helps catch unexplained numbers while allowing common values
  "no-new-wrappers": "error", // Prevents `new String()`, `new Number()`, etc. (use literals instead)
  "no-param-reassign": ["error", { props: true }], // Disallow reassigning function parameters but allow modifying object properties
  "no-promise-executor-return": "error", // Ensures `new Promise` executors always return something
  "no-self-compare": "error", // Disallows `x === x` (usually a mistake)
  "no-template-curly-in-string": "error", // Flags unintended use of `${}` inside strings without backticks
  "no-throw-literal": "error", // Prevents throwing non-error objects (e.g., `throw "error"` should be `throw new Error("error")`)
  "no-unmodified-loop-condition": "error", // Ensures loop conditions change, preventing infinite loops
  "no-unreachable-loop": "error", // Prevents loops that can never execute
  "no-use-before-define": [
    "error",
    {
      allowNamedExports: false,
      classes: false,
      functions: true, // Allow function hoisting
      variables: true,
    },
  ],
  "no-useless-computed-key": "error", // Disallows unnecessary computed keys in objects (e.g., `{["key"]: value}` instead of `{ key: value }`)
  "no-useless-constructor": "error", // Disallows empty constructors
  "no-useless-rename": "error", // Disallows renaming variables to the same name in import/export/destructuring
  "no-useless-return": "error", // Prevents redundant `return;` statements
  "no-var": "error", // Enforce `let` and `const` (modern best practice)
  "object-shorthand": "error", // Enforces `{ foo }` instead of `{ foo: foo }`
  "prefer-arrow-callback": "error", // Enforces arrow functions in callbacks where possible
  "prefer-const": "error", // Requires `const` when a variable isn’t reassigned
  "prefer-destructuring": [
    "error",
    {
      AssignmentExpression: {
        array: false, // Allow `x = arr[0]`, don't force `[x] = arr`
        object: false, // Allow `x = obj.x`, don't force `{ x } = obj`
      },
      VariableDeclarator: {
        array: false,
        object: true, // Enforce destructuring for objects (`const { x } = obj`)
      },
    },
  ],
  "prefer-object-spread": "error", // Enforces `{ ...obj }` over `Object.assign()`
  "prefer-rest-params": "error", // Use `...args` instead of `arguments`
  "prefer-spread": "error", // Use `[...arr]` instead of `arr.concat()`
  "prefer-template": "error", // Use template literals instead of string concatenation
  "radix": "error", // Require a radix argument in `parseInt`
  "require-await": "error", // Disallows async functions without `await` (prevents unnecessary `async`)
  "strict": ["error", "safe"], // Enforces `"use strict"` only where needed (safe mode)
  "symbol-description": "error", // Requires descriptions when creating `Symbol()`
} satisfies Rules;

export const javascriptRules = {
  ...eslint.configs.recommended.rules,
  ...additionalRules,
} satisfies Rules;
