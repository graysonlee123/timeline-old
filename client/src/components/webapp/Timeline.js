import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Timeline = () => {
  const [closedMonthsData, setClosedMonths] = useState({
    closedMonths: [],
  });

  const { closedMonths } = closedMonthsData;

  const handleToggleMonth = (month) => {
    setClosedMonths({closedMonths, ...closedMonths, month})
  };

  return (
    <div className='timeline'>
      <div className='events'>
        <div className='month'>
          <div className='title'>
            <span onClick={(e) => handleToggleMonth('jan')}>Toggle</span>{' '}
            January
          </div>
          <div className='event'>
            <span className='title'>Event's title here</span>
            <span className='tags'>Tag Tag</span>
            <span className='day'>Event day here</span>
          </div>
        </div>
        <div className='month'>
          <div className='title'>
            <span onClick={(e) => handleToggleMonth('feb')}>Toggle</span>{' '}
            January
          </div>
          <div className='event'>
            <span className='title'>Event's title here</span>
            <span className='tags'>Tag Tag</span>
            <span className='day'>Event day here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
