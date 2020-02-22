import React, { Component } from "react";
import Button from "../Button";

export default class Landing extends Component {
  render() {
    return (
      <header>
        <h2>Timeline App</h2>
        <Button to="/timeline" center buttonStyle="accent">
          Go to your Timeline
        </Button>
      </header>
    );
  }
}
