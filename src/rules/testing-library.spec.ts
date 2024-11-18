import { testingLibraryRules } from "./testing-library";

test("should create testingLibrary rules", async () => {
  await expect(testingLibraryRules()).resolves.toMatchSnapshot();
});
