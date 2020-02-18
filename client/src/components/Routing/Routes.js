import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Auth/Login';
import Profile from '../User/Profile';
import Timeline from '../Timeline/Timeline';
import NewEventForm from '../Timeline/NewEvent/NewEventForm';
import NotFound from '../NotFound';
import PrivateRoute from '../../containers/PrivateRoute';

const Routes = ({authenticated}) => {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/my-profile' component={Profile} isAuthenticated={authenticated}/>
        <PrivateRoute exact path='/timeline' component={Timeline} isAuthenticated={authenticated}/>
        <PrivateRoute exact path='/timeline/add-event' component={NewEventForm} isAuthenticated={authenticated}/>
        <Route component={NotFound}/>
      </Switch>
    </>
  )
}

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps)(Routes);