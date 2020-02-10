import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <div className='loading-text'>Loading</div>
        <div>
          <div className='loader'></div>
        </div>
      </div>
    );
  }
}
