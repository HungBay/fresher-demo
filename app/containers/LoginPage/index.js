/**
 *
 * LoginPage
 *
 */

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LoadingIndicator from 'components/LoadingIndicator';
import React, { memo, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { login } from './actions';
import reducer from './reducer';
import saga from './saga';

import makeSelectLoginPage, {
  makeSelectError,
  makeSelectIsLoggin,
  makeSelectLoading,
  makeSelectRole,
  makeSelectUsername,
} from './selectors';
import useStyles from './styles';
import { debounce } from 'lodash';

export function LoginPage({ loading, role, onLogin, isLoggin }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const classes = useStyles();
  const [user, setUser] = useState({ username: '', password: '' });
  const handleChange = debounce((name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  }, 300);

  const handleLogin = e => {
    e.preventDefault();
    onLogin(user);
  };
  return isLoggin ? (
    role === 'admin' ? (
      <Redirect to="/dashboard" />
    ) : (
      <Redirect to="/report" />
    )
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {loading ? <LoadingIndicator /> : 'SIGN IN'}
          </Button>
        </form>
      </div>
    </Container>
  );
}

LoginPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  role: makeSelectRole(),
  isLoggin: makeSelectIsLoggin(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: data => dispatch(login(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
