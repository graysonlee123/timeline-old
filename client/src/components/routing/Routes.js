import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routes
import PrivateRoute from './PrivateRoute';
import WebApp from '../webapp/WebApp';

// Components
import Landing from '../general/Landing';
import SignUp from '../../components/auth/SignUp';
import Login from '../../components/auth/Login';
import Alert from '../../components/Alert';
import NoMatch from '../../components/NoMatch';
import Event from '../webapp/Event';
import NewEvent from '../webapp/NewEvent';

const Routes = () => (
  <Router>
    <Alert />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/webapp' component={WebApp} />
      <PrivateRoute exact path='/webapp/event/' component={Event} />
      <PrivateRoute exact path='/webapp/event/new' component={NewEvent} />
      <Route path='*' component={NoMatch} />
    </Switch>
  </Router>
);

export default Routes;
