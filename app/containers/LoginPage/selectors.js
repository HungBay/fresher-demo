import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );
const makeSelectUsername = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.username,
  );
const makeSelectRole = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.role,
  );
const makeSelectLoading = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.loading,
  );
const makeSelectError = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.error,
  );
const makeSelectIsLoggin = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.isLoggin,
  );
export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectUsername,
  makeSelectRole,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsLoggin,
};
