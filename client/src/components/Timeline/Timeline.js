import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import AppHeader from './AppHeader';
import Card from './Card';
import Spinner from '../Spinner';

export default class Login extends Component {
  state = {
    isLoading: true
  }

  componentDidMount = async () => {
    try {
      const events = await fetch('/event/my-events');
      const res = await events.json()

      if (res) {
        console.log(res);
        // Render components
        this.setState({events: res, isLoading: false})
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
          <div className='cards_container'>
            {this.state.isLoading ? <Spinner /> : this.state.events.map((event, i) => {
              const {date, name, description} = event;
              
              return (
                <Card name={name} date={date} description={description} key={i}/>
              )
            }
            )}
          </div>
        </main>
      </div>
    );
  }
}