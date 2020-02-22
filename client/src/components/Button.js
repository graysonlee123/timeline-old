import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// Buttons can have the attribute left, right and center to align the button
// Buttons can have the "buttonStyle" attribute which will be set to accent or danger. Leave out for default
// Adding the attribute regular will create a regular <a> tag
// Not sending a 'to' attribute will make a fake button

export default class Button extends Component {
  state = {
    classList: classNames({
      button: true,
      button_accent: this.props.buttonStyle === "accent",
      button_danger: this.props.buttonStyle === "danger"
    })
  };

  render() {
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
          {
            this.props.to ? (
              this.props.regular ? (
                <a href={this.props.to} className={this.state.classList}>
                  {this.props.children}
                </a>
              ) : (
                <Link to={this.props.to} className={this.state.classList}>
                  {this.props.children}
                </Link>
              )
            ) : (
              this.props.onClick ? (
                <span onClick={this.props.onClick} className={this.state.classList}>
                  {this.props.children}
                </span>              
              ) : (
                <span className={this.state.classList}>
                  {this.props.children}
                </span>              
              )
            )
          }
        </div>
      </div>
    );
  }
}
