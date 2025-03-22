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
    ? reactConfigs["recommended-type-checked"].rules
    : reactConfigs.recommended.rules;

  return {
    ...jsxA11yPlugin.configs.recommended.rules,
    ...upwarn(reactPluginRules),
    "react-compiler/react-compiler": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: isUsingVite,
        allowExportNames: isUsingNextjs ? nextAllowedExportNames : [],
      },
    ],
  } satisfies Rules;
};
