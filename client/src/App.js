import React from 'react';

import Navigation from '../src/components/Navigaton';
import Sidebar from '../src/components/Sidebar/Sidebar';
import AppHeader from '../src/components/AppHeader';
import Card from '../src/components/Card';
// import Button from '../src/components/Button';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Sidebar />
      <main>
        <AppHeader />
        <Card />
      </main>
    </div>
  );
}

export default App;
