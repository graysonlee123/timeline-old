import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Auth/Login';
import Profile from '../User/Profile';
import Timeline from '../Timeline/Timeline';
import NotFound from '../NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/my-profile' component={Profile}/>
        <PrivateRoute exact path='/timeline' component={Timeline}/>
        <Route component={NotFound}/>
      </Switch>
    </>
  )
}

export default Routes;