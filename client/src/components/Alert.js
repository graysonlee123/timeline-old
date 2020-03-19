import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => (
  <div id="alerts-container">
    {alerts !== null && alerts.length > 0 && alerts.map(alert => (
      <div className="alert fade-in" key={alert.id}>
        {alert.msg}
      </div>
    ))}
  </div>
)

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
