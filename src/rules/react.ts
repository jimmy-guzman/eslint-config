import type { ReactOptions, Rules } from "../types";

import { hasNext, hasTypescript, hasVite } from "../utils/has-dependency";
import { unwrapDefault } from "../utils/interop-default";
import { rebrand } from "../utils/rebrand";
import { upwarn } from "../utils/upwarn";

const nextAllowedExportNames = [
  "experimental_ppr",
  "dynamic",
  "dynamicParams",
  "revalidate",
  "fetchCache",
  "runtime",
  "preferredRegion",
  "maxDuration",
  "metadata",
  "generateMetadata",
  "viewport",
  "generateViewport",
  "generateImageMetadata",
  "generateSitemaps",
  "generateStaticParams",
  "alt",
  "size",
  "contentType",
];

export const reactRules = async (options?: ReactOptions) => {
  const [
    { configs: reactConfigs },
    { configs: jsxA11yConfigs },
    { configs: reactDomConfigs },
    { configs: reactWebApiConfigs },
    { configs: reactNamingConventionConfigs },
    { configs: reactRscConfigs },
  ] = await Promise.all([
    unwrapDefault(import("eslint-plugin-react-x")),
    unwrapDefault(import("eslint-plugin-jsx-a11y-x")),
    unwrapDefault(import("eslint-plugin-react-dom")),
    unwrapDefault(import("eslint-plugin-react-web-api")),
    unwrapDefault(import("eslint-plugin-react-naming-convention")),
    unwrapDefault(import("eslint-plugin-react-rsc")),
  ]);
  const isUsingNextjs = hasNext();
  const isUsingVite = hasVite();
  const isUsingTypesScript = hasTypescript();

  const reactPluginRules = isUsingTypesScript
    ? reactConfigs["strict-type-checked"].rules
    : reactConfigs.strict.rules;

  const reactDomPluginRules = isUsingTypesScript
    ? ({
        ...reactDomConfigs.strict.rules,
        "react-dom/no-string-style-prop": "off",
        "react-dom/no-unknown-property": "off",
      } satisfies Rules)
    : ({
        ...reactDomConfigs.strict.rules,
        "react-dom/no-string-style-prop": "error",
        "react-dom/no-unknown-property": [
          "error",
          { requireDataLowercase: true },
        ],
      } satisfies Rules);

  return {
    ...rebrand(jsxA11yConfigs.recommended.rules, "jsx-a11y-x", "jsx-a11y"),
    ...upwarn(reactPluginRules),
    ...upwarn(reactDomPluginRules),
    ...upwarn(reactWebApiConfigs.recommended.rules),
    ...upwarn(reactNamingConventionConfigs.recommended.rules),
    ...upwarn(reactRscConfigs.recommended.rules),
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
    "react-x/error-boundaries": "off", // Handled by react-hooks/error-boundaries
    "react-x/exhaustive-deps": "off", // Handled by react-hooks/exhaustive-deps
    "react-x/globals": "off", // Handled by react-hooks/globals
    "react-x/immutability": "off", // Handled by react-hooks/immutability
    "react-x/no-duplicate-key": "error",
    "react-x/no-implicit-children": "error",
    "react-x/no-implicit-key": "error",
    "react-x/no-implicit-ref": "error",
    "react-x/no-missing-component-display-name": "off", // displayName isn't required on every component
    "react-x/no-missing-context-display-name": "error",
    "react-x/no-unused-state": "off", // Legacy class-component rule
    "react-x/purity": "off", // Handled by react-hooks/purity
    "react-x/refs": "off", // Handled by react-hooks/refs
    "react-x/rules-of-hooks": "off", // Handled by react-hooks/rules-of-hooks
    "react-x/set-state-in-effect": "off", // Handled by react-hooks/set-state-in-effect
    "react-x/set-state-in-render": "off", // Handled by react-hooks/set-state-in-render
    "react-x/static-components": "off", // Handled by react-hooks/static-components
    "react-x/unsupported-syntax": "off", // Handled by react-hooks/unsupported-syntax
    "react-x/use-memo": "off", // Handled by react-hooks/use-memo
    ...options?.overrides,
  } satisfies Rules;
};
