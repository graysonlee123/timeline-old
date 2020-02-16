import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewEvent extends Component {
  render() {
    return (
      <Link to='/timeline/add-event'>
        <div className='new-event'>+ New Event</div>
      </Link>
    );
  }
}
