import type { ReactOptions, TestingOptions } from "../types";

import { hasReactQuery, hasTestingLibrary } from "./has-dependency";

export const shouldEnableTanstackQuery = (
  { utilities = [] }: ReactOptions,
  autoDetect: boolean,
) => {
  return (
    utilities.includes("@tanstack/query") || (autoDetect && hasReactQuery())
  );
};

export const shouldEnableTestingLibrary = (
  { utilities = [] }: TestingOptions,
  autoDetect: boolean,
) => {
  return (
    utilities.includes("testing-library") || (autoDetect && hasTestingLibrary())
  );
};
