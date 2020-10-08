import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customer state domain
 */

const selectMenu = state => state.customer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Customer
 */

const makeSelectMenu = () =>
  createSelector(
    selectMenu,
    MenuState => MenuState.listMenu,
  );

export { selectMenu, makeSelectMenu };
