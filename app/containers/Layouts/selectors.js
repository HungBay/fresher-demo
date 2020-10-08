import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the layouts state domain
 */

const selectLayoutsDomain = state => state.layouts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Layouts
 */

const makeSelectLayouts = () =>
  createSelector(
    selectLayoutsDomain,
    substate => substate,
  );

export default makeSelectLayouts;
export { selectLayoutsDomain };
