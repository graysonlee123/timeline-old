import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from '../src/components/Navigaton';
import Routes from './components/Routing/Routes';
import Landing from './components/Landing/Landing';
// import Button from '../src/components/Button';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route component={Routes} />
      </Switch>
    </div>
  );
}

export default App;
