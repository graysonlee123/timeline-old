import React, { Component } from 'react';
import axios from 'axios';

export default class NewEventForm extends Component {
  state = {
    name: '',
    date: '',
    description: ''
  }

  handleFormSubmit = e => {
    e.preventDefault();
  
    axios.post('/event', {
      name: this.state.name
    }).then(data => console.log('sent. received: ', data)).catch(err => console.log(err))
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className='new_event_wrapper'>
          <form onSubmit={this.handleFormSubmit}>
            <h3>Add an Event</h3>
            <input type='text' placeholder='Event Name' value={this.state.name} onChange={this.handleChange} name='name' />
            <input type='text' placeholder='Event Date' value={this.state.date} onChange={this.handleChange} name='date'/>
            <textarea
              type='textarea'
              placeholder='Event Description. You can make this as long as you want.'
              value={this.state.description}
              onChange={this.handleChange}
              name='description'
            />
            <button type='submit'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}
