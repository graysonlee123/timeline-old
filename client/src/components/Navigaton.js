import React, { Component } from 'react';

import Button from '../components/Button';

export default class Navigaton extends Component {
  render() {
    return (
      <nav>
        <Button buttonText='Account' />
        <Button buttonText='Log Out' buttonStyle='accent' />
      </nav>
    );
  }
}
