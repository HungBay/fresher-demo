import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './textBox.css';
import { compose } from 'redux';
import clsx from 'clsx';

function TextBox({ label, total, className, ...rest }) {
  console.log('render textbox');
  return (
    <Grid item className="Text__Box">
      <Card
        className={clsx('Text__Box__Card', className)}
        style={{ backgroundColor: '#2196f3' }}
        {...rest}
      >
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                color="inherit"
                gutterBottom
                variant="body2"
                className="Text__Box__Typography"
              >
                {label}
              </Typography>
              <Typography
                color="inherit"
                variant="h3"
                className="Text__Box_Total"
              >
                {total}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className="TextBox__Icon">
                <AttachMoneyIcon />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
TextBox.propTypes = {
  label: PropTypes.string,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.any,
};
export default compose(memo)(TextBox);
