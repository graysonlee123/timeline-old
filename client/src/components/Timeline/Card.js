import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.date}
        {this.props.description}
      </div>
    );
  }
}
