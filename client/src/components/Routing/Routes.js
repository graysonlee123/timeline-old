import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Auth/Login';
import Home from '../Home/Home';
import Profile from '../User/Profile';
import Timeline from '../Timeline/Timeline';
import NewEventForm from '../Timeline/NewEvent/NewEventForm';
import NotFound from '../NotFound';
import PrivateRoute from '../../containers/PrivateRoute';

const Routes = ({setSession, authenticated, userId}) => {  
  return (
    <>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/home'>
          <Home setSession={setSession} />
        </Route>
        <PrivateRoute exact path='/my-profile'>
          <Profile />
        </ PrivateRoute>
        <PrivateRoute exact path='/timeline' authenticated={authenticated}>
          <Timeline userId={userId}/>
        </PrivateRoute>
        <PrivateRoute exact path='/timeline/add-event' authenticated={authenticated}>
          <NewEventForm authenticated={authenticated} userId={userId} />
        </PrivateRoute>
        <Route component={NotFound}/>
      </Switch>
    </>
  ) 
}

export default Routes;