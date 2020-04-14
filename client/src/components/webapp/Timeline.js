import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Timeline = ({ events, isLoading }) => {
  return isLoading ? (
    <div>Spinner</div>
  ) : (
    <div className='timeline'>
      <div className='events'>
        {events.map((event, i) => (
          <div className='month' key={event._id}>
            <div className='title'>
              <span>{event.name}</span>
            </div>
            <div className='event-details'>
              <span className='title'>{event.title}</span>
              <span className='title'>Tag Tag</span>
              <span className='title'>
                <Moment format='DD' date={event.date} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.array,
};

const mapStateToProps = (state) => ({
  events: state.events.events,
  isLoading: state.events.isLoading,
});

export default connect(mapStateToProps)(Timeline);
