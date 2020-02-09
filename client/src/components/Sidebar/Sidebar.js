import React, { Component } from 'react';
import axios from 'axios';

export default class Sidebar extends Component {
  state = {
    years: []
  };

  componentDidMount = () => {
    axios
      .get('/api/events')
      .then(data => {
        this.setState({
          events: data.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const events = this.state.events;
    const sidebar = {};

    events &&
      events.forEach(e => {
        const year = new Date(e.date).getFullYear();
        const month = new Date(e.date).getMonth();

        if (sidebar[year] == undefined) sidebar[year] = {};
        if (sidebar[year][month] == undefined) sidebar[year][month] = [];
        sidebar[year][month].push(e);

        console.log(sidebar);
      });

    return (
      <div id='sidebar'>
        <div className='quick-navigaton'>
          {/* {years.map(y => (
            <div className='year-container'>
              <div className='year-wrapper'>
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
                {y}
              </div>
              <div className='months-wrapper'></div>
            </div>
          ))} */}
        </div>
        <div className='new-event'>+ New Event</div>
      </div>
    );
  }
}
