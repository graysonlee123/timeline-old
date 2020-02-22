import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Auth/Login';
import Home from '../Home/Home';
import Profile from '../User/Profile';
import Timeline from '../Timeline/Timeline';
import NewEventForm from '../Timeline/NewEvent/NewEventForm';
import NotFound from '../NotFound';
import PrivateRoute from '../../containers/PrivateRoute';

const Routes = ({setSession, authenticated, user, events}) => {  
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
          <Timeline user={user} events={events}/>
        </PrivateRoute>
        <PrivateRoute exact path='/timeline/add-event' authenticated={authenticated}>
          <NewEventForm authenticated={authenticated} user={user} />
        </PrivateRoute>
        <Route component={NotFound}/>
      </Switch>
    </>
  ) 
}

export default Routes;