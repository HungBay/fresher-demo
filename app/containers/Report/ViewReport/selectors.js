import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.ReportView || initialState;

const makeSelectReport = () =>
  createSelector(
    selectHome,
    homeState => homeState.report,
  );

export { selectHome, makeSelectReport };
