/*
 * Customer Messages
 *
 * This contains all the text for the Customer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Customer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Customer container!',
  },
});
