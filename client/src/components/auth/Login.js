import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ auth: { isAuthenticated, user }, login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    try {
      login(email, password);
    } catch (err) {
      // TODO: Front-end errors, send in redux action?
      console.log(err);
    }
  };

  if (isAuthenticated && user) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1>Sign In</h1>
      <p>
        <i className='fas fa-user' /> Log in to your timeline
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' value='Login' />
      </form>
      <p>
        Need to register? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login })(Login);
