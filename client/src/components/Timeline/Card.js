import React, { Component } from 'react';
import axios from 'axios';

export default class Card extends Component {
  state = {
    name: ''
  };

  addCard = () => {
    const event = { name: this.state.name };

    if (event.name && event.name.length > 0) {
      axios
        .post('/api/event', { name: event.name })
        .then(res => {
          if (res.data) {
            console.log(res.data);
          }
        })
        .catch(err => console.log(err));

      this.setState({ name: '' });
    } else {
      console.log('input field required');
    }
  };

  getCards = () => {
    axios
      .get('/api/event')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
        <button onClick={this.getCards}>Get cards</button>
      </div>
    );
  }
}
