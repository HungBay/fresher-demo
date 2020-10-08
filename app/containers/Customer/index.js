/**
 *
 * Customer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCustomer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Customer() {
  useInjectReducer({ key: 'customer', reducer });
  useInjectSaga({ key: 'customer', saga });

  return (
    <div>
      <Helmet>
        <title>Customer</title>
        <meta name="description" content="Description of Customer" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Customer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listMenu: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Customer);
