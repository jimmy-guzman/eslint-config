import type { Rules } from "../types";

export const nodeRules = {
  "n/handle-callback-err": ["error", "^(err|error)$"],
  "n/no-deprecated-api": "error",
  "n/no-exports-assign": "error",
  "n/no-new-require": "error",
  "n/no-path-concat": "error",
  "n/no-process-exit": "off", // TODO [2025-12-31]: enable this rule
  "n/prefer-global/console": ["error", "always"],
  "n/prefer-node-protocol": "error",
  "n/process-exit-as-throw": "error",
} satisfies Rules;
