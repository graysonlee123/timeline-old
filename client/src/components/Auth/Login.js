import React, { Component } from 'react';
import Button from '../Button';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>
          Login using:
        </h3>
        <Button to='/auth/google' buttonText='Google'/>
      </div>
    );
  }
}