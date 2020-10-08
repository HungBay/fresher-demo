import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectReport = state => state.report || initialState;

const makeSelectAllReport = () =>
  createSelector(
    selectReport,
    reportState => reportState.reports,
  );

const makeSelectMoneyDay = () =>
  createSelector(
    selectReport,
    reportState => reportState.moneyDay,
  );
const makeSelectTotalOrder = () =>
  createSelector(
    selectReport,
    reportState => reportState.totalOrder,
  );
const makeSelectReportTotal = () =>
  createSelector(
    selectReport,
    reportState => reportState.reportTotal,
  );

export {
  selectReport,
  makeSelectAllReport,
  makeSelectMoneyDay,
  makeSelectTotalOrder,
  makeSelectReportTotal,
};
