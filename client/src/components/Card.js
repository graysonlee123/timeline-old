import React, { Component } from 'react';
import axios from 'axios';

export default class Card extends Component {
  state = {};

  addCard = () => {
    const event = { name: this.state.name };

    console.log(event);

    if (event.name && event.name.length > 0) {
      axios
        .get('/api/event')
        .then(res => {
          if (res.data) {
            console.log(res.data);
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    let { name } = this.state;

    return (
      <div>
        <input type='text' onChange={this.handleChange} value={name} />
        <button onClick={this.addCard}>Add card</button>
      </div>
    );
  }
}
