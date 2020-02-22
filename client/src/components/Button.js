import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// Buttons can have the attribute left, right and center to align the button
// Buttons can have the "buttonStyle" attribute which will be set to accent or danger. Leave out for default
// Adding the attribute regular will create a regular <a> tag

export default class Button extends Component {
  state = {
    classList: classNames({
      button: true,
      button_accent: this.props.buttonStyle === "accent",
      button_danger: this.props.buttonStyle === "danger"
    })
  };

  render() {
    console.log(this.props.to, this.props.regular);

    return (
      <div className="button_container">
        <div
          className={classNames({
            button_wrapper: true,
            center: !this.props.left && !this.props.right,
            left: this.props.left,
            right: this.props.right
          })}
        >
          {!this.props.regular ? (
            <Link className={this.state.classList} to={this.props.to} >
              {this.props.children}
            </Link>
          ) : (
            <a href={this.props.to} className={this.state.classList}>
              {this.props.children}
            </a>
          )}
        </div>
      </div>
    );
  }
}
