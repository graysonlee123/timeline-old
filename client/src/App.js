import React from 'react';

import Card from '../src/components/Card';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Button from '../src/components/Button';

function App() {
  return (
    <div className='app'>
      <Button buttonText='Regular Button' />
      <Button buttonText='Accent Button' buttonStyle='accent' />
      <Button buttonText='Danger Button' buttonStyle='danger' />
      <Button buttonText='Inverted Button' buttonStyle='inverted' />
      <Sidebar />
      <Card />
    </div>
  );
}

export default App;
