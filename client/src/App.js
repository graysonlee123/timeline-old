import React from 'react';
import './App.css';

import Card from '../src/components/Card';
import Sidebar from '../src/components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Card />
    </div>
  );
}

export default App;
