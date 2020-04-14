import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeAlert } from '../actions/alert';
import className from 'classnames';

const Alert = ({ alerts, closeAlert }) => {
  const handleCloseAlert = (id) => closeAlert(id);

  return (
    alerts.length > 0 && (
      <div
        id='alerts-container'
        className={className({
          alert: 'true',
          success: 'true',
        })}
      >
        {alerts !== null &&
          alerts.length > 0 &&
          alerts.map((alert) => (
            <div key={alert.id}>
              <div>{alert.msg}</div>
              <i
                className='fa fa-times'
                onClick={(e) => handleCloseAlert(alert.id)}
              ></i>
            </div>
          ))}
      </div>
    )
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  closeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { closeAlert })(Alert);
