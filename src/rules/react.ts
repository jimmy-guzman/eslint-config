import type { Rules } from "../types";

import { hasNext, hasTypescript, hasVite } from "../utils/has-dependency";
import { interopDefault } from "../utils/interop-default";
import { upwarn } from "../utils/upwarn";

const nextAllowedExportNames = [
  "dynamic",
  "dynamicParams",
  "revalidate",
  "fetchCache",
  "runtime",
  "preferredRegion",
  "maxDuration",
  "config",
  "generateStaticParams",
  "metadata",
  "generateMetadata",
  "viewport",
  "generateViewport",
];

export const reactRules = async () => {
  const [{ configs: reactConfigs }, jsxA11yPlugin] = await Promise.all([
    interopDefault(import("@eslint-react/eslint-plugin")),
    interopDefault(import("eslint-plugin-jsx-a11y")),
  ]);
  const isUsingNextjs = hasNext();
  const isUsingVite = hasVite();
  const isUsingTypesScript = hasTypescript();

  const reactPluginRules = isUsingTypesScript
    ? reactConfigs["strict-type-checked"].rules
    : reactConfigs.recommended.rules;

  return {
    ...jsxA11yPlugin.flatConfigs.recommended.rules,
    ...upwarn(reactPluginRules),
    "@eslint-react/dom/no-missing-button-type": "error" as const,
    "@eslint-react/dom/no-missing-iframe-sandbox": "error" as const,
    "@eslint-react/dom/no-string-style-prop": "error",
    "@eslint-react/dom/no-unsafe-target-blank": "error" as const,
    "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off", // Handled by react-hooks/set-state-in-effect
    "@eslint-react/jsx-key-before-spread": "error",
    "@eslint-react/jsx-shorthand-boolean": "error",
    "@eslint-react/jsx-shorthand-fragment": "error",
    "@eslint-react/naming-convention/component-name": "error",
    "@eslint-react/no-children-prop": "error",
    "@eslint-react/no-class-component": "error",
    "@eslint-react/no-missing-context-display-name": "error",
    "@eslint-react/no-unnecessary-key": "error",
    "@eslint-react/no-unnecessary-use-callback": "error",
    "@eslint-react/no-unnecessary-use-memo": "error",
    "@eslint-react/no-unstable-context-value": "error" as const,
    "@eslint-react/no-unstable-default-props": "error" as const,
    "@eslint-react/no-unused-state": "error" as const,
    "@eslint-react/no-useless-fragment": "error",
    "@eslint-react/prefer-namespace-import": "error",
    "react-compiler/react-compiler": "error",
    "react-hooks/component-hook-factories": "error",
    "react-hooks/error-boundaries": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/globals": "error",
    "react-hooks/immutability": "error",
    "react-hooks/incompatible-library": "error",
    "react-hooks/preserve-manual-memoization": "error",
    "react-hooks/purity": "error",
    "react-hooks/refs": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/set-state-in-effect": "error",
    "react-hooks/set-state-in-render": "error",
    "react-hooks/static-components": "error",
    "react-hooks/unsupported-syntax": "error",
    "react-hooks/use-memo": "error",
    "react-hooks/void-use-memo": "error",
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: isUsingVite,
        allowExportNames: isUsingNextjs ? nextAllowedExportNames : [],
      },
    ],
  } satisfies Rules;
};
