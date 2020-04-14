import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Redirect from 'react';
import axios from 'axios';

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      date: null,
      description: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    try {
      const id = new URLSearchParams(document.location.search).get('id');
      const res = await axios.get(`/api/event/${id}`);

      const { date, description, name } = res.data.event;

      this.setState({
        name,
        date,
        description,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return this.state.isLoading ? (
      <div>Spinner</div>
    ) : (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.description}</div>
        <div>
          <Moment format='YYYY-MM-DD' date={this.state.date} />
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object,
};

export default connect(null)(Event);
