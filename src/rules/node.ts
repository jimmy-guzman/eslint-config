import type { Rules } from "../types";

export const nodeRules = {
  "n/handle-callback-err": ["error", "^(err|error)$"],
  "n/no-deprecated-api": "error",
  "n/no-exports-assign": "error",
  "n/no-new-require": "error",
  "n/no-path-concat": "error",
  "n/no-process-exit": "off", // TODO [2026-12-31]: enable this rule
  "n/no-top-level-await": ["error", { ignoreBin: true }],
  "n/prefer-global/buffer": ["error", "always"],
  "n/prefer-global/console": ["error", "always"],
  "n/prefer-global/crypto": ["error", "never"],
  "n/prefer-global/process": ["error", "always"],
  "n/prefer-global/text-decoder": ["error", "never"],
  "n/prefer-global/text-encoder": ["error", "never"],
  "n/prefer-global/timers": ["error", "always"],
  "n/prefer-global/url": ["error", "always"],
  "n/prefer-global/url-search-params": ["error", "always"],
  "n/prefer-node-protocol": "error",
  "n/process-exit-as-throw": "error",
} satisfies Rules;
