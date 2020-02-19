import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import AppHeader from './AppHeader';
import Card from './Card';
import axios from 'axios';

export default class Login extends Component {
  getUserEvents = async () => {
    try {
      const events = axios.get('/events/user/' + this.props.userId);

      if (events) {
        console.log(events)
      }
    } catch(err) {
      console.log(err);
    }
  }

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