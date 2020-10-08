import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { getReportError, getReportSuccess } from './actions';
import { GET_REPORT_REQUEST } from './constants';
const URL = 'http://localhost:3001';

function* getReportSaga({ payload }) {
  const { id } = payload;
  const requestURL = `${URL}/order/${id}`;
  try {
    const repos = yield call(request, requestURL);
    //console.log(repos)
    yield put(getReportSuccess(repos));
  } catch (err) {
    yield put(getReportError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_REPORT_REQUEST, getReportSaga);
}
