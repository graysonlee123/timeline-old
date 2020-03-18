import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ auth }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>Your Name: {auth.user.first_name}</div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
