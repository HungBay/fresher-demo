import {
  GET_REPORT_REQUEST,
  GET_REPORT_SUCCESS,
  GET_REPORT_ERROR,
} from './constants';

export function getReportRequest(id) {
  return {
    type: GET_REPORT_REQUEST,
    payload: {
      id,
    },
  };
}
export function getReportSuccess(report) {
  return {
    type: GET_REPORT_SUCCESS,
    report,
  };
}
export function getReportError(error) {
  return {
    type: GET_REPORT_ERROR,
    error,
  };
}
