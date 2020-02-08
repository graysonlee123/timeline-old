import React from 'react';

import Navigation from '../src/components/Navigaton';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Card from '../src/components/Card';
// import Button from '../src/components/Button';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Sidebar />
      <Card />
    </div>
  );
}

export default App;
