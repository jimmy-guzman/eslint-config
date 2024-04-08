// @ts-check
import JITI from "jiti";

const jiti = JITI(import.meta.url);

/**
 * @type {import('./src').default}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const jimmyDotCodes = jiti("./src").default;

export default jimmyDotCodes({
  typescript: true,
  react: {
    utilities: ["@tanstack/query"],
  },
  testing: {
    utilities: ["testing-library"],
  },
  overrides: [
    {
      ignores: ["fixtures"],
    },
  ],
});
