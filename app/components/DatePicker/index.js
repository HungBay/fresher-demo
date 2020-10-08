import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import moment from 'moment';
import { compose } from 'redux';
DatePickerBox.propTypes = {
  onChange: PropTypes.func,
};

function DatePickerBox({ onChange, ...rest }) {
  // const defautlValueDate = new Date();
  // console.log(defautlValueDate);

  console.log('datetime pick');
  return (
    <TextField
      {...rest}
      id="datetime-local"
      type="datetime-local"
      // formatDate={defautlValueDate =>
      //   moment(defautlValueDate).format('DD-MM-YYYY')
      // }
      // defaultValue={defautlValueDate}
      // className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={onChange}
    />
  );
}

export default compose(memo)(DatePickerBox);
