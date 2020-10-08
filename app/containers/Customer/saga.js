import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { getMenuSuccess } from './actions';
import { LIST_MENU } from './constants';
import { makeSelectMenu } from './selectors';
// Individual exports for testing
export function* getApi() {
  const menu = yield select(makeSelectMenu());
  const requestURL =
    'https://5f7de626834b5c0016b06c1c.mockapi.io/api/customer/products';

  try {
    const repos = yield call(request, requestURL);
    yield put(getMenuSuccess(repos, menu));
  } catch (e) {
    throw e;
  }
}

export default function* getListMenu() {
  yield takeLatest(LIST_MENU, getApi);
}
