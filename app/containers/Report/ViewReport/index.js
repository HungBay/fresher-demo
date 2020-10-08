import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import GoBack from '../../../components/GoBack';
import { getReportRequest } from './actions';
import CustomerInformation from './CustomerInformation';
import reducer from './reducer';
import saga from './saga';
import { makeSelectReport } from './selectors';
import './ViewReport.css';
import avatar from '../../../images/avatar.jpg';
import ProductInformation from './ProductInformation';

ViewReport.propTypes = {
  onLoad: PropTypes.func,
  match: PropTypes.object,
};

const key = 'ReportView';

function ViewReport(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { onLoad, match, history, report } = props;

  useEffect(() => {
    const res = onLoad(match.params.id);
    return () => {
      res;
    };
  }, [match.params.id]);

  return (
    <div className="ViewReport">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <GoBack history={history} />
        </Grid>
        <Grid item lg={8} sm={8} xl={8} xs={12}>
          <ProductInformation order={report} />
        </Grid>
        <Grid item lg={4} sm={4} xl={4} xs={12}>
          <CustomerInformation report={report} avatar={avatar} />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  report: makeSelectReport(),
});
const mapDispatchToProps = dispatch => {
  return {
    onLoad: id => {
      dispatch(getReportRequest(id));
    },
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ViewReport);
