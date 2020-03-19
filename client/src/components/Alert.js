import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeAlert } from "../actions/alert";

const Alert = ({ alerts, closeAlert }) => {
  const handleCloseAlert = (id) => {
    console.log(id);
    closeAlert(id);
  }
  
  return (
    <div id="alerts-container">
      {alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <div className="alert fade-in" key={alert.id}>
          <div className="alert-message">
            {alert.msg}
          </div>
          <i className="remove-alert-button fa fa-times" onClick={(e) => handleCloseAlert(alert.id)}></i>
        </div>
      ))}
    </div>
  )
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  closeAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps, { closeAlert })(Alert);
