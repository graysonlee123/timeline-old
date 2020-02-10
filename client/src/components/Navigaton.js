import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

export default class Navigaton extends Component {
  render() {
    return (
      <nav>
        <Link to='home'> Home </Link>
        <Button buttonText='Account' to='/account' />
        <Button buttonText='Log Out' to='/logout' buttonStyle='accent' />
      </nav>
    );
  }
}
