import type { ReactOptions, Rules } from "../types";

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

export const reactRules = async (options?: ReactOptions) => {
  const [
    { configs: reactConfigs },
    { flatConfigs: jsxA11yConfigs },
    { configs: reactDomConfigs },
    { configs: reactHooksExtraConfigs },
    { configs: reactWebApiConfigs },
    { configs: reactNamingConventionConfigs },
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-react-x")),
    interopDefault(import("eslint-plugin-jsx-a11y")),
    interopDefault(import("eslint-plugin-react-dom")),
    interopDefault(import("eslint-plugin-react-hooks-extra")),
    interopDefault(import("eslint-plugin-react-web-api")),
    interopDefault(import("eslint-plugin-react-naming-convention")),
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
    ...jsxA11yConfigs.recommended.rules,
    ...upwarn(reactPluginRules),
    ...upwarn(reactDomPluginRules),
    ...upwarn(reactHooksExtraConfigs.recommended.rules),
    ...upwarn(reactWebApiConfigs.recommended.rules),
    ...upwarn(reactNamingConventionConfigs.recommended.rules),
    "react-compiler/react-compiler": "error",
    "react-hooks-extra/no-direct-set-state-in-use-effect": "off", // Handled by react-hooks/set-state-in-effect
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
    "react-naming-convention/component-name": "error",
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: isUsingVite,
        allowExportNames: isUsingNextjs ? nextAllowedExportNames : [],
      },
    ],
    "react-x/jsx-dollar": "off", // Seems a bit too aggressive
    "react-x/jsx-shorthand-boolean": "error",
    "react-x/jsx-shorthand-fragment": "error",
    "react-x/no-missing-context-display-name": "error",
    "react-x/prefer-namespace-import": "error",
    ...options?.overrides,
  } satisfies Rules;
};
