import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Routes from './components/Routing/Routes';
import Landing from './components/Landing/Landing';

// Redux functions
import {setSession} from './actions/action'

const App = ({setSession, authenticated}) => {
  return (
    <div className='app'>
      <Navigation authenticated={authenticated} />
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Routes setSession={setSession} />
      </Switch>
    </div>
  );
}

// State here refers to Redux State
const mapStateToProps = state => ({
  authenticated: state.session.authenticated
})

const mapDispatchToProps = dispatch => ({
  setSession: data => dispatch(setSession(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
