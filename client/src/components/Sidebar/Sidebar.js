import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../Spinner';

export default class Sidebar extends Component {
  state = {
    years: [],
    loading: true
  };

  componentDidMount = () => {
    axios
      .get('/api/events')
      .then(data => {
        this.setState({
          events: data.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  };

  handleAccordian(e) {
    const elem = e.target;
    const months = elem.nextElementSibling;

    if (elem.classList.contains('accordian-active')) {
      elem.classList.remove('accordian-active');
      months.style.height = '0px';
    } else {
      elem.classList.add('accordian-active');
      months.style.height = 'auto';
    }
  }

  render() {
    const events = this.state.events;
    const sidebar = {};
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    events &&
      events.forEach(e => {
        const year = new Date(e.date).getFullYear();
        const month = new Date(e.date).getMonth();

        if (sidebar[year] === undefined) sidebar[year] = {};
        if (sidebar[year][month] === undefined) sidebar[year][month] = [];
        sidebar[year][month].push(e);
      });

    console.log(sidebar);

    return (
      <div id='sidebar'>
        <div className='accordians-wrapper'>
          {this.state.loading && <Spinner />}
          {Object.keys(sidebar).map((year, i) => (
            <div className='accordian' key={i}>
              <div className='accordian-year' onClick={this.handleAccordian}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='6.385'
                  height='6.769'
                  viewBox='0 0 6.385 6.769'
                >
                  <path
                    id='Subtraction_3'
                    data-name='Subtraction 3'
                    d='M204,35.385h0L200.615,29h6.769L204,35.385Z'
                    transform='translate(-29 207.385) rotate(-90)'
                    fill='#313131'
                  />
                </svg>
                {year}
              </div>
              <div className='accordian-months'>
                {Object.keys(sidebar[year]).map((month, i) => (
                  <div key={i}>{monthNames[month - 1]}</div>
                ))}
              </div>
            </div>
          ))}
          {/* 
          {Object.keys(sidebar).map((year, i) => (
            <div key={i} className='months-wrapper'>
              <div>{year}</div>
              {Object.keys(sidebar[year]).map((month, i) => (
                <div key={i}>{monthNames[month - 1]}</div>
              ))}
            </div>
          ))} */}
        </div>
        <div className='new-event'>+ New Event</div>
      </div>
    );
  }
}
