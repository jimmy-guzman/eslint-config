// @ts-check
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);

/**
 * @type {import('./src').default}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const jimmyDotCodes = jiti("./src").default;

export default jimmyDotCodes({ autoDetect: true });
