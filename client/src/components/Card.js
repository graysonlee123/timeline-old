import React, { Component } from 'react';
import axios from 'axios';

export default class Card extends Component {
  state = {};

  addCard = () => {
    const event = { name: this.state.name };

    if (event.name && event.name.length > 0) {
      console.log('Event Success');
      axios
        .get('/api/events')
        .then(res => {
          if (res.data) {
            this.props.getEvents();
            this.setState({ name: '' });
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  handleChange = e => {
    this.setState({
      action: e.target.value
    });
  };

  render() {
    let { action } = this.state;
    return (
      <div>
        <input type='text' onChange={this.handleChange} value={name} />
        <button onClick={this.addCard}>add card</button>
      </div>
    );
  }
}
