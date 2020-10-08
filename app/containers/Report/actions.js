import {
  GET_ALL_REPORT_ERROR,
  GET_ALL_REPORT_REQUEST,
  GET_ALL_REPORT_SUCCESS,
  GET_FILTER_DATE_REQUEST,
  GET_QUERY_REPORT_ERROR,
  GET_QUERY_REPORT_REQUEST,
  GET_QUERY_REPORT_SUCCESS,
  GET_TOTAL_CULCALATOR_ERROR,
  GET_TOTAL_CULCALATOR_REQUEST,
  GET_TOTAL_CULCALATOR_SUCCESS,
} from './constants';
export function getAllReportRequest() {
  return {
    type: GET_ALL_REPORT_REQUEST,
  };
}
export function getAllReportSuccess(reports) {
  return {
    type: GET_ALL_REPORT_SUCCESS,
    reports,
  };
}
export function getAllReportError(error) {
  return {
    type: GET_ALL_REPORT_ERROR,
    error,
  };
}

export function getTotalCulcalatorRequest() {
  return {
    type: GET_TOTAL_CULCALATOR_REQUEST,
  };
}
export function getTotalCulcalatorSuccess(reportTotal) {
  return {
    type: GET_TOTAL_CULCALATOR_SUCCESS,
    reportTotal,
  };
}
export function getTotalCulcalatorError(error) {
  return {
    type: GET_TOTAL_CULCALATOR_ERROR,
    error,
  };
}

export function getQueryReportRequest(keyword, startDate, endDate) {
  return {
    type: GET_QUERY_REPORT_REQUEST,
    payload: {
      keyword,
      startDate,
      endDate,
    },
  };
}
export function getQueryReportSuccess(reports) {
  return {
    type: GET_QUERY_REPORT_SUCCESS,
    reports,
  };
}
export function getQueryReportError(error) {
  return {
    type: GET_QUERY_REPORT_ERROR,
    error,
  };
}
