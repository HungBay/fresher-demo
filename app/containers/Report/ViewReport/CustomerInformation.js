import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { compose } from 'redux';

CustomerInformation.propTypes = {
  report: PropTypes.object,
  avatar: PropTypes.string,
};

function CustomerInformation(props) {
  const { report, avatar } = props;
  const { name, address, phone, gender } = report;
  return (
    <Paper className="Customer">
      <Typography variant="h3" component="h3" gutterBottom>
        Khách hàng
      </Typography>
      <img src={avatar} alt="Lỗi" />
      <div className="Customer__Information">
        <span>Tên khách hàng: {name}</span>
        <span>Địa chỉ khách hàng: {address}</span>
        <span>Số điện thoại: {phone}</span>
        <span>Giới tính: {gender}</span>
      </div>
    </Paper>
  );
}

export default compose(memo)(CustomerInformation);
