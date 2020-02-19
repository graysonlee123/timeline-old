import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Auth/Login';
import Home from '../Home/Home';
import Profile from '../User/Profile';
import Timeline from '../Timeline/Timeline';
import NewEventForm from '../Timeline/NewEvent/NewEventForm';
import NotFound from '../NotFound';
import PrivateRoute from '../../containers/PrivateRoute';

const Routes = ({setSession, authenticated}) => {  
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/home' render={props => <Home setSession={setSession}/>} />
        <PrivateRoute exact path='/my-profile' component={Profile}/>
        <PrivateRoute exact path='/timeline' component={Timeline}/>
        <PrivateRoute exact path='/timeline/add-event' component={NewEventForm}/>
        <Route component={NotFound}/>
      </Switch>
    </>
  )
}

export default Routes;