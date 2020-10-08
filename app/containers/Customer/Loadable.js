/**
 *
 * Asynchronously loads the component for Customer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./Order'));
