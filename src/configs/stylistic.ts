const stylisticConfig = () => {
  return [
    {
      name: "jimmy.codes/stylistic",
      rules: {
        "curly": "error",
        "arrow-body-style": ["error", "always"],
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
      },
    },
  ];
};

export default stylisticConfig;
