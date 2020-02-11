import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from '../src/components/Navigaton';
import Sidebar from '../src/components/Sidebar/Sidebar';
import AppHeader from '../src/components/AppHeader';
import Card from '../src/components/Card';
// import Button from '../src/components/Button';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navigation />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path='/timeline/add-event'>Add Event</Route>
          <Route path='/timeline'>
            <div className='timeline_wrapper'>
              <Sidebar />
              <main>
                <AppHeader />
                <Card />
              </main>
            </div>
          </Route>
          <Route path='/account'>
            <div>Account page</div>
          </Route>
          <Route path='/'>
            <div>
              <h1>Landing Page</h1>
              <ul>
                <li>
                  <Link to='/timeline'> Timeline </Link>
                </li>
                <li>
                  <Link to='/account'> Account </Link>
                </li>
                <li>
                  <Link to='/'> Home </Link>
                </li>
              </ul>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
