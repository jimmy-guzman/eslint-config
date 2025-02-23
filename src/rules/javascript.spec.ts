import eslint from "@eslint/js";

import { additionalRules, javascriptRules } from "./javascript";

test("should create javascript rules", () => {
  expect(javascriptRules).toMatchSnapshot();
});

test("should NOT have overlapping rules between recommended", () => {
  const recommendedRules = new Set(
    Object.keys(eslint.configs.recommended.rules),
  );
  const overlappingRules = Object.keys(additionalRules).filter((rule) => {
    return recommendedRules.has(rule);
  });

  expect(overlappingRules).toStrictEqual([]);
});
