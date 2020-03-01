import React, { Component } from 'react';

export default class AppHeader extends Component {
  render() {
    return (
      <header>
        <h2>A history of</h2>
        <h1>{this.props.user.username.split(' ')[0]}</h1>
      </header>
    );
  }
}
