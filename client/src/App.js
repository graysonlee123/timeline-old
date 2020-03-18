import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Routes
import PrivateRoute from './components/auth/PrivateRoute';

// Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/Alert';
import Dashboard from './components/account/Dashboard';
import Account from './components/account/Account';
import NoMatch from './components/NoMatch';

// * We want to check if the user already has a token every time App is loaded
// * Basically whenever the user refreshes the page

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/account' component={Account} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
