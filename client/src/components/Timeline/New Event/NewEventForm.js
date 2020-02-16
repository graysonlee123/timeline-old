import React, { Component } from 'react';

export default class NewEventForm extends Component {
  render() {
    return (
      <div>
        <div className='new_event_wrapper'>
          <form action=''>
            <h3>Add an Event</h3>
            <input type='text' placeholder='Event Name' />
            <input type='text' placeholder='Event Date' />
            <textarea
              type='textarea'
              placeholder='Event Description. You can make this as long as you want.'
            />
          </form>
        </div>
      </div>
    );
  }
}
