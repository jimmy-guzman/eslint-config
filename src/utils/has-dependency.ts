import { isPackageExists } from "local-pkg";

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
  return ["@testing-library/react"].some((pkg) => isPackageExists(pkg));
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
