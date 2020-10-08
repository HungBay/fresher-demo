import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { subtotal, totalOrderOfDay, totalReportOfDay } from 'utils/helpers';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import DatePickerBox from '../../components/DatePicker';
import SearchInput from '../../components/SearchIput';
import TextBox from '../../components/TextBox';
import {
  getAllReportRequest,
  getQueryReportRequest,
  getTotalCulcalatorRequest,
} from './actions';
import reducer from './reducer';
import './report.css';
import ReportTable from './reportTable';
import saga from './saga';
import {
  makeSelectAllReport,
  makeSelectMoneyDay,
  makeSelectReportTotal,
} from './selectors';

const key = 'report';
const Report = ({ onLoad, reportData, onSearch, reportTotal }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    const res = onLoad();
    return () => {
      res;
    };
  }, []);

  const [keyword, setKeyWord] = useState('');
  const [filterDate, setFilterDate] = useState({
    startDate: '',
    endDate: '',
  });

  const handleChange = value => {
    setKeyWord(value);
  };

  useEffect(() => {
    onSearch(keyword, filterDate.startDate, filterDate.endDate);
  }, [keyword, filterDate]);
  // const onSelectValue = evt => {
  //   console.log(evt.target.value);
  // };

  const totalOrder = useMemo(() => {
    console.log('totalOrder');
    return reportTotal.length;
  }, [reportTotal]);

  const totalMoney = useMemo(() => {
    console.log('totalMoney');
    return subtotal(reportData);
  }, [reportTotal]);

  const totalMoneyOfDay = useMemo(() => {
    console.log('totalMoneyOfDay');
    return totalReportOfDay(reportData);
  }, [reportTotal]);
  const OrderOfDay = useMemo(() => {
    console.log('OrderOfDay');
    return totalOrderOfDay(reportData);
  }, [reportTotal]);

  const handleChangeFilter = useCallback(
    evt => {
      const { target } = evt;
      const { value } = target;
      const { name } = target;

      setFilterDate({ ...filterDate, [name]: value });
    },
    [filterDate.startDate, filterDate.endDate],
  );

  return (
    <div className="root">
      <Grid container spacing={4} className="Main__Header">
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TextBox
            label="Số tiền hàng ngày"
            total={totalMoneyOfDay}
            className="Text1Box"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TextBox
            label="Số đơn hàng trong ngày"
            total={OrderOfDay}
            className="Text2Box"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TextBox
            label="Tổng số đơn hàng"
            total={totalOrder}
            className="Text3Box"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TextBox
            label="Số tổng tiền"
            total={totalMoney}
            className="Text4Box"
          />
        </Grid>

        <Grid item lg={12} sm={12} xl={12} xs={12} className="Main__Toolbar">
          <SearchInput
            onChange={handleChange}
            placeholder="Search..."
            className="Filter__Search"
          />
          <Grid className="Filter__Date">
            <DatePickerBox onChange={handleChangeFilter} name="startDate" />
            <DatePickerBox onChange={handleChangeFilter} name="endDate" />
          </Grid>

          {/* <select
            onChange={onSelectValue}
            style={{
              outline: 'none',
              borderTop: '0px',
              borderRight: '0px',
              borderLeft: '0px',
              backgroundColor: 'rgba(255, 255, 255, 0.0)',
            }}
          >
            <option value="asc" defaultValue>
              Tăng theo thời gian
            </option>
            <option value="desc">Giảm theo thời gian</option>
          </select> */}
        </Grid>
        <Grid item lg={12} sm={12} xl={12} xs={12}>
          <ReportTable reportData={reportData} />
        </Grid>
      </Grid>
    </div>
  );
};

Report.propTypes = {
  onLoad: PropTypes.func,
  reportData: PropTypes.array,
  onSearch: PropTypes.any,
  reportTotal: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  reportData: makeSelectAllReport(),
  moneyDay: makeSelectMoneyDay(),
  reportTotal: makeSelectReportTotal(),
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(getAllReportRequest());
    dispatch(getTotalCulcalatorRequest());
  },
  onSearch: (keyword, startDate, endDate) => {
    dispatch(getQueryReportRequest(keyword, startDate, endDate));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Report);
