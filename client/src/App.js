import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Routes from './components/Routing/Routes';
import Landing from './components/Landing/Landing';

// Redux functions
import { toggleAuth } from './actions/action.js'

const App = ({setAuth, isAuthenticated}) => {
  return (
    <div className='app'>
      <Navigation authenticated={isAuthenticated} />
      <button onClick={() => setAuth(true)}>Login</button>
      <button onClick={() => setAuth(false)}>Logout</button>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route component={Routes} />
      </Switch>
    </div>
  );
}

// State here refers to Redux State
const mapStateToProps = state => ({
  isAuthenticated: state.authenticated
})

const mapDispatchToProps = dispatch => ({
  setAuth: bool => dispatch(toggleAuth(bool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
