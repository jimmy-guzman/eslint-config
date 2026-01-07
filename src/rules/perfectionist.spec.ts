import { perfectionistRules } from "./perfectionist";

describe("perfectionistRules", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("should create perfectionist rules", () => {
    expect(perfectionistRules).toMatchSnapshot();
  });
});
