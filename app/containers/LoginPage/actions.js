/*
 *
 * LoginPage actions
 *
 */

import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export function login(data) {
  return {
    type: LOGIN,
    payload: {
      data,
    },
  };
}
export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
}
export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
}
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
