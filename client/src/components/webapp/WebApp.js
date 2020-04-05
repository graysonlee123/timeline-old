import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';

import Timeline from './Timeline';
import Account from './account/Account';
import Dashboard from './Dashboard';

const WebApp = () => {
  let match = useRouteMatch();

  return (
    <div className="webapp">
        <Switch>
          <Route exact path={`${match.path}/`} component={Timeline} />
          <Route exact path={`${match.path}/account`} component={Account} />
          <Route exact path={`${match.path}/settings`} component={Dashboard} />
        </Switch>
    </div>
  );
};

export default WebApp;
