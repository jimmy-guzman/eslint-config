import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

import { eslintCommentsRules } from "../rules/eslint-comments";

export const eslintCommentsConfig = () => {
  return [
    {
      ...comments.recommended,
      name: "jimmy.codes/eslint-comments",
      rules: eslintCommentsRules,
    },
  ];
};
