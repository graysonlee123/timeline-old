import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <h2>Loading...</h2>
        <div>
          <div className='loader'></div>
        </div>
      </div>
    );
  }
}
