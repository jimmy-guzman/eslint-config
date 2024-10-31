import reactConfig from "./react";

describe("reactConfig", () => {
  it("should create config w/ @tanstack/query rules", () => {
    expect(reactConfig({ utilities: ["@tanstack/query"] })).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "jimmy.codes/react/query",
        }),
      ]),
    );
  });
});
