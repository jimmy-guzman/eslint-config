import { isPackageExists } from "local-pkg";

import { TESTING_LIBRARY_FAMILY } from "../constants";

export const hasTypescript = () => {
  return isPackageExists("typescript");
};

export const hasReact = () => {
  return isPackageExists("react");
};

export const hasVitest = () => {
  return isPackageExists("vitest");
};

export const hasJest = () => {
  return isPackageExists("jest");
};

export const hasTesting = () => {
  return hasVitest() || hasJest();
};

export const hasTestingLibrary = () => {
  return TESTING_LIBRARY_FAMILY.some((pkg) => {
    return isPackageExists(pkg);
  });
};

export const hasReactQuery = () => {
  return isPackageExists("@tanstack/react-query");
};

export const hasAstro = () => {
  return isPackageExists("astro");
};

export const hasPlaywright = () => {
  return isPackageExists("@playwright/test");
};

export const hasStorybook = () => {
  return isPackageExists("storybook");
};
