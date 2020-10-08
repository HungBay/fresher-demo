/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useCallback, useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useLocation,
  Redirect,
  useHistory,
} from 'react-router-dom';
import LoginPage from 'containers/LoginPage/Loadable';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';

// max-width: calc(768px + 16px * 5);
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { makeSelectRole } from '../LoginPage/selectors';
import PrivateRoute from './privateRoute';
import GlobalStyle from '../../global-styles';
import routes from './routes';
import { loginSuccess } from '../LoginPage/actions';
import useFilterMap from '../../components/hooks/useFilterMap';

function App({ role, autoLogin }) {
  const dataRoute = useFilterMap(role);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      autoLogin(token);
      const decoded = jwt(token, { header: true });
      const { exp } = decoded;
      if (new Date(exp * 1000) < Date.now()) {
        console.log('blabla');
      }
    }
  }, []);

  const renderRoute = () => {
    let result = null;
    // filter

    result = dataRoute.map((route, index) => (
      <PrivateRoute
        exact={route.exact}
        key={index}
        path={route.path}
        component={route.component}
        layout={route.layout}
      />
    ));
    return result;
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        {renderRoute()}
        <PrivateRoute path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
const mapStateToProps = createStructuredSelector({
  role: makeSelectRole(),
});

const mapDispatchToProps = dispatch => ({
  autoLogin: data => dispatch(loginSuccess(data)),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(App);
