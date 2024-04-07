import { testingLibraryRules } from "./testing-library";

test("should create testingLibrary rules", () => {
  expect(testingLibraryRules).toMatchSnapshot();
});
