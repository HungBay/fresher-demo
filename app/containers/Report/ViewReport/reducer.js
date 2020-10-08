import produce from 'immer';
import {
  GET_REPORT_REQUEST,
  GET_REPORT_SUCCESS,
  GET_REPORT_ERROR,
} from './constants';
export const initialState = {
  error: null,
  report: {},
};

/* eslint-disable default-case, no-param-reassign */
const reportReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_REPORT_REQUEST:
        break;
      case GET_REPORT_SUCCESS:
        draft.report = action.report;
        break;
      case GET_REPORT_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default reportReducer;
