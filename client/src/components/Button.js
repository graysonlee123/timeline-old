import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Buttons can have the attribute left, right and center to align the button
// Buttons can have the "buttonStyle" attribute which will be set to accent or danger. Leave out for default

export default class Button extends Component {
  state = {};

  render() {
    return (
      <div className='button_container'>
        <div className={classNames({
          button_wrapper: true,
          center: !this.props.left && !this.props.right,
          left: this.props.left,
          right: this.props.right
        })}>
          <Link
            className={classNames({
              button: true,
              button_accent: this.props.buttonStyle === 'accent',
              button_danger: this.props.buttonStyle === 'danger'
            })}
            to={this.props.to}
          >
            {this.props.children}
          </Link>
        </div>
      </div>
    );
  }
}
