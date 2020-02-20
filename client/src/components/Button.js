import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Button extends Component {
  state = {};

  render() {
    return (
      <Link
        className={classNames({
          button: true,
          button_accent: this.props.buttonStyle === 'accent'
        })}
        to={this.props.to}
      >
        {this.props.children}
      </Link>
    );
  }
}
