import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Button from './Button';

const Navigation = ({authenticated}) => {
  return (
    <nav>
      <span>
        <Link className="light" to="/">
          Home
        </Link>
      </span>
      <span>
        {authenticated ? (
          <>
          <Button buttonText="Account" to="/account" />
          <Button buttonText="Log Out" to="/auth/logout" buttonStyle="accent" />
          </>
        ) : (
          <Button buttonText="Login" to="/login" />
        )}
      </span>
    </nav>
  );
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

export default Navigation;