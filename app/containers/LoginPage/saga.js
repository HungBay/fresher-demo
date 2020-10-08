import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loginFailed, loginSuccess } from './actions';
import { LOGIN } from './constants';
import request from 'utils/request';

// Individual exports for testing
export function* loginPageSaga({ payload }) {
  // See example in containers/HomePage/saga.js
  const { data } = payload;
  const requestURL = 'https://test-api-lan3.herokuapp.com/auth/login';
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const resp = yield call(request, requestURL, requestOptions);
    localStorage.setItem('token', resp.token);
    yield put(loginSuccess(resp.token));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

export default function* userData() {
  yield takeLatest(LOGIN, loginPageSaga);
}
