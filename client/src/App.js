import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../src/components/Navigaton';
import Routes from './components/Routing/Routes';
import Landing from './components/Landing/Landing';
// import Button from '../src/components/Button';


function App() {
  return (
    <Router>
      <div className='app'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route component={Routes} />
        </Switch>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        {/* <Switch>
          <Route path='/timeline/add-event'>
            <NewEventForm />
          </Route>
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
          <Route path='/auth/login'>
            <div>
              <h3>Login using:</h3>
              <a href='http://localhost:5000/auth/google'>Google</a>
            </div>
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
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
