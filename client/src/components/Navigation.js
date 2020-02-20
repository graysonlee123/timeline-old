import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Button from './Button';

class Navigation extends React.Component {
  handleLogout = () => {
    this.props.logOut();
    this.props.history.push('/login')
  }

  render() {
    return (
      <nav>
        <span>
          <Link className="light" to="/">
            Home
          </Link>
        </span>
        <span>
          {this.props.authenticated ? (
            <>
            <Button to="/account">
              Account
            </Button>
            <span onClick={this.handleLogout} className='button'>
              Log Out
            </span> 
            </>
          ) : (
            <Button to="/login">
              Login
            </Button>
          )}
        </span>
      </nav>
    );
  }
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired
}

export default withRouter(Navigation);