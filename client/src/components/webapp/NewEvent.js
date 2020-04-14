import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios';
import { addEvent } from '../../actions/events';

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      description: '',
    };
  }

  handleSubmit = () => {
    try {
      this.props.addEvent({
        name: this.state.name,
        date: this.state.date,
        description: this.state.description,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Event Name'
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          name='name'
        />
        <input
          type='date'
          value={this.state.date}
          onChange={(e) => this.handleChange(e)}
          name='date'
        />
        <input
          type='text'
          placeholder='Description'
          value={this.state.description}
          onChange={(e) => this.handleChange(e)}
          name='description'
        />
        <div onClick={this.handleSubmit}>Submit</div>
      </form>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object,
};

export default connect(null, { addEvent })(Event);
