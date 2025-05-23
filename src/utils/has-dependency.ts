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

export const hasNext = () => {
  return isPackageExists("next");
};

export const hasVite = () => {
  return isPackageExists("vite");
};
