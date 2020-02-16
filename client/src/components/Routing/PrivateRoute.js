import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component}) => (
  <Route 
    render={
      props => false 
      ? 
      (<Redirect to='/login'/>) 
      : 
      (<Component {...props}/>) 
    }
  />
)

export default PrivateRoute;