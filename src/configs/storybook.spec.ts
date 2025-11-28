import storybookConfig from "./storybook";

describe("storybook", () => {
  it("should create stories rules", async () => {
    const [_setup, storiesConfig] = await storybookConfig(true);

    expect(storiesConfig?.files).toMatchInlineSnapshot(`
      [
        "**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
        "**/*.story.@(ts|tsx|js|jsx|mjs|cjs)",
      ]
    `);
    expect(storiesConfig?.rules).toMatchInlineSnapshot(`
      {
        "import-x/no-anonymous-default-export": "off",
        "import/no-anonymous-default-export": "off",
        "react-hooks/rules-of-hooks": "off",
        "storybook/await-interactions": "error",
        "storybook/context-in-play-function": "error",
        "storybook/default-exports": "error",
        "storybook/hierarchy-separator": "error",
        "storybook/meta-satisfies-type": "error",
        "storybook/no-redundant-story-name": "error",
        "storybook/prefer-pascal-case": "error",
        "storybook/story-exports": "error",
        "storybook/use-storybook-expect": "error",
        "storybook/use-storybook-testing-library": "error",
        "unicorn/no-anonymous-default-export": "off",
      }
    `);
  });

  it("should create main rules", async () => {
    const [_setup, _storiesConfig, mainConfig] = await storybookConfig(true);

    expect(mainConfig?.files).toMatchInlineSnapshot(`
      [
        ".storybook/main.@(js|cjs|mjs|ts)",
      ]
    `);
    expect(mainConfig?.rules).toMatchInlineSnapshot(`
      {
        "storybook/no-uninstalled-addons": "error",
      }
    `);
  });
});
