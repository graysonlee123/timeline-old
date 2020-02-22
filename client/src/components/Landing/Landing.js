import React, { Component } from "react";
import Button from "../Button";

export default class Landing extends Component {
  render() {
    return (
      <header>
        <h2>Timeline App</h2>
        <Button to="/timeline" left buttonStyle="accent">
          Go to your Timeline
        </Button>
        <Button to="/timeline" center regular buttonStyle="accent">
          Go to your Timeline
        </Button>
        <Button to="/timeline" buttonStyle="accent">
          Go to your Timeline
        </Button>
        <Button to="/timeline" right buttonStyle="danger">
          Go to your Timeline
        </Button>
      </header>
    );
  }
}
