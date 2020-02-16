import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import AppHeader from './AppHeader';
import Card from './Card';

export default class Login extends Component {
  render() {
    return (
      <div className='timeline_wrapper'>
        <Sidebar />
        <main>
          <AppHeader />
          <Card />
        </main>
      </div>
    );
  }
}