import React, { Component } from 'react';
import Button from '../Button';

export default class Landing extends Component {
  render() {
    return (
      <header>
        <h2>
          Timeline App 
        </h2>
        <p>Landing page</p>
        <ul>
          <li>
            <Button to='/timeline' buttonText='Go to your Timeline' buttonStyle='accent'/>
          </li>
        </ul>
      </header>
    );
  }
}