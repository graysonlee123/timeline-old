import React, { Component } from "react";
import Button from '../Button';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login using:</h3>
        {/* <a href="http://localhost:5000/auth/google" className="button button_accent">
          Sign in with Google
        </a> */}
        <Button regular center buttonStyle="accent" to="http://localhost:5000/auth/google">
          <i className="fa fa-google" aria-hidden="true"></i> Sign in with Google
        </Button>
      </div>
    );
  }
}
