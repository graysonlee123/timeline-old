import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

// State here refers to Redux State
const mapStateToProps = state => ({
  authenticated: state.session.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);
