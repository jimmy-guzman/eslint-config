import type { Rules } from "../types";

export const nodeRules = {
  "n/no-process-exit": "off", // TODO [2024-12-31]: enable this rule
  "n/prefer-node-protocol": "error",
} satisfies Rules;
