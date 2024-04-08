import reactConfig from "./react";

describe("reactConfig", () => {
  it("should create default config", () => {
    expect(reactConfig()).toMatchSnapshot();
  });

  it("should create config w/ @tanstack/query rules", () => {
    expect(reactConfig({ utilities: ["@tanstack/query"] })).toMatchSnapshot();
  });
});
