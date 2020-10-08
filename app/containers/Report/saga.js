import { call, delay, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  getAllReportError,
  getAllReportRequest,
  getAllReportSuccess,
  getQueryReportError,
  getQueryReportSuccess,
  getTotalCulcalatorError,
  getTotalCulcalatorSuccess,
} from './actions';
import {
  GET_ALL_REPORT_REQUEST,
  GET_QUERY_REPORT_REQUEST,
  GET_TOTAL_CULCALATOR_REQUEST,
} from './constants';
const URL = 'http://localhost:3001';

function* getAllReportSaga() {
  const requestURL = `${URL}/order`;
  const requestOptions = {};
  try {
    const repos = yield call(request, requestURL, requestOptions);
    yield put(getAllReportSuccess(repos));
  } catch (err) {
    yield put(getAllReportError(err));
  }
}

function* getQueryReportSaga({ payload }) {
  yield delay(500);
  const { keyword, startDate, endDate } = payload;
  if (keyword) {
    const requestURL = `${URL}/order?q=${keyword}`;
    try {
      const repos = yield call(request, requestURL);
      if (startDate && endDate) {
        const data = repos.filter(
          x => x.orderDate >= startDate && x.orderDate <= endDate,
        );
        yield put(getQueryReportSuccess(data));
      } else {
        yield put(getQueryReportSuccess(repos));
      }
    } catch (err) {
      yield put(getQueryReportError(err));
    }
  } else if (
    keyword === '' &&
    startDate !== 'undefined' &&
    endDate !== 'undefined'
  ) {
    if (startDate <= endDate) {
      const requestURL = `${URL}/order?q=${keyword}`;
      try {
        const repos = yield call(request, requestURL);
        if (startDate && endDate) {
          const data = repos.filter(
            x => x.orderDate >= startDate && x.orderDate <= endDate,
          );
          yield put(getQueryReportSuccess(data));
        } else {
          yield put(getQueryReportSuccess(repos));
        }
      } catch (err) {
        yield put(getQueryReportError(err));
      }
    }
  } else {
    yield put(getAllReportRequest());
  }
}

function* getTotalCulcalator() {
  const requestURL = `${URL}/order`;
  try {
    const repos = yield call(request, requestURL);
    yield put(getTotalCulcalatorSuccess(repos));
  } catch (err) {
    yield put(getTotalCulcalatorError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_REPORT_REQUEST, getAllReportSaga);
  yield takeLatest(GET_QUERY_REPORT_REQUEST, getQueryReportSaga);
  yield takeLatest(GET_TOTAL_CULCALATOR_REQUEST, getTotalCulcalator);
}
