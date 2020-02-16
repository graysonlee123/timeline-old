import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login using:</h3>
        <a href="http://localhost:5000/auth/google" className="button button_accent">
          Sign in with Google
        </a>
      </div>
    );
  }
}
