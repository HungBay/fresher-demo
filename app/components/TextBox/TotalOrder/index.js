import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { compose } from 'redux';

function TextBox({ label, total, ...rest }) {
  console.log('render totalOrder');
  return (
    <Grid item className="Text__Box">
      <Card className="Text__Box__Card" {...rest}>
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
              <Avatar>
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
};
export default compose(memo)(TextBox);
