import produce from 'immer';
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

// The initial state of the App
export const initialState = {
  reports: [],
  error: null,
  moneyDay: null,
  totalOrder: 0,
  reportTotal: [],
};

/* eslint-disable default-case, no-param-reassign */
const reportReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // get all report
      case GET_ALL_REPORT_REQUEST:
        break;
      case GET_ALL_REPORT_SUCCESS:
        draft.reports = action.reports;
        break;
      case GET_ALL_REPORT_ERROR:
        draft.error = action.error;
        break;

      case GET_TOTAL_CULCALATOR_REQUEST:
        break;
      case GET_TOTAL_CULCALATOR_SUCCESS:
        draft.reportTotal = action.reportTotal;
        break;
      case GET_TOTAL_CULCALATOR_ERROR:
        draft.error = action.error;
        break;

      // search report
      case GET_QUERY_REPORT_REQUEST:
        break;
      case GET_QUERY_REPORT_SUCCESS:
        draft.reports = action.reports;
        break;
      case GET_QUERY_REPORT_ERROR:
        draft.error = action.error;
        break;

    }
  });

export default reportReducer;
