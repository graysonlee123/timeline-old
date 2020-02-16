import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

export default class Navigaton extends Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <nav>
        <span>
          <Link className='light' to='/'>
            Home
          </Link>
        </span>
        <span>
          {this.state.loggedIn ? <Button buttonText='Account' to='/account' /> : <Button buttonText='Login' to='/login' />}
          {this.state.loggedIn && <Button buttonText='Log Out' to='/logout' buttonStyle='accent' />}
        </span>
      </nav>
    );
  }
}
