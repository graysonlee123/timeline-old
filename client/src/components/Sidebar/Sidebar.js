import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div id='sidebar'>
        <div className='quick-navigation'>
          <div className='nav-date-wrapper'>
            <span>v</span>
            <span className='years'>2011</span>
          </div>
          <div className='new-event'>+ New event</div>
        </div>
      </div>
    );
  }
}
