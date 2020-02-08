import React, { Component } from 'react';

export default class Button extends Component {
  state = {
    buttonStyle: this.props.buttonStyle || '',
    buttonClass: ['button']
  };

  // Sets button classes. 'danger', 'accent', 'inverted'
  componentDidMount = state => {
    const { buttonStyle } = this.props || false;

    if (buttonStyle) {
      this.setState({
        buttonClass: [...this.state.buttonClass, buttonStyle]
      });
    }
  };

  render() {
    return (
      <a className={this.state.buttonClass.join(' ')} href='#'>
        {this.props.buttonText || 'Button'}
      </a>
    );
  }
}
