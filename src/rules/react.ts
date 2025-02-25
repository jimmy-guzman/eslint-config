import type { Rules } from "../types";

import { hasNext, hasVite } from "../utils/has-dependency";
import { interopDefault } from "../utils/interop-default";
import { normalizeRuleEntries } from "../utils/normalize-rule-entries";

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
  const [reactPlugin, jsxA11yPlugin] = await Promise.all([
    interopDefault(import("eslint-plugin-react")),
    interopDefault(import("eslint-plugin-jsx-a11y")),
  ]);
  const isUsingNextjs = hasNext();
  const isUsingVite = hasVite();

  return {
    ...jsxA11yPlugin.configs.recommended.rules,
    ...normalizeRuleEntries(reactPlugin.configs.flat.recommended?.rules),
    ...normalizeRuleEntries(reactPlugin.configs.flat["jsx-runtime"]?.rules),
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
    "react/boolean-prop-naming": "off", // revisit
    "react/button-has-type": "error",
    "react/checked-requires-onchange-or-readonly": "error",
    "react/default-props-match-prop-types": "error",
    "react/destructuring-assignment": "off", // revisit
    "react/forbid-component-props": "off",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/forward-ref-uses-ref": "error",
    "react/function-component-definition": "off", // revisit
    "react/hook-use-state": "error",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-filename-extension": "off",
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": "off",
    "react/jsx-max-depth": "off",
    "react/jsx-no-bind": "off", // revisit
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-pascal-case": ["error", { allowNamespace: true }],
    "react/jsx-props-no-spread-multi": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "off",
    "react/no-array-index-key": "off",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-danger": "off",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-invalid-html-attribute": "error",
    "react/no-multi-comp": "off",
    "react/no-namespace": "error",
    "react/no-object-type-as-default-prop": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-set-state": "off",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unstable-nested-components": "error",
    "react/no-unused-class-component-methods": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "off",
    "react/prefer-exact-props": "off",
    "react/prefer-read-only-props": "off",
    "react/prefer-stateless-function": "off",
    "react/require-default-props": "off",
    "react/require-optimization": "off",
    "react/self-closing-comp": "error",
    "react/sort-comp": "off",
    "react/sort-default-props": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
  } satisfies Rules;
};
