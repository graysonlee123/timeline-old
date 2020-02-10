import React, { Component } from 'react';

export default class AppHeader extends Component {
  state = {
    usersName: 'Grayson'
  };

  render() {
    return (
      <header>
        <h2>A history of</h2>
        <h1>{this.state.usersName}</h1>
      </header>
    );
  }
}
