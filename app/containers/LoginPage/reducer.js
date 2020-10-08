/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';
import jwt_decode from 'jwt-decode';
export const initialState = {
  username: '',
  isLoggin: false,
  loading: false,
  error: false,
  role: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.loading = true;
        draft.error = false;
        break;
      case LOGIN_SUCCESS:
        const { data } = action.payload;
        const decodeJWT = jwt_decode(data);
        draft.username = decodeJWT.username;
        draft.loading = false;
        draft.isLoggin = true;
        draft.error = false;
        draft.role = decodeJWT.role;
        break;
      case LOGIN_FAILED:
        const { error } = action.payload;
        alert(error.message);
        draft.loading = false;
        draft.error = error.message;
        break;
      case LOGOUT:
        localStorage.clear('token');
        draft.username = '';
        draft.role = '';
        draft.isLoggin = false;
    }
  });

export default loginPageReducer;
