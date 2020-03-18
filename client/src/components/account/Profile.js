import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const [formData, setFormData] = useState({
    email: user.email,
    name: user.name
  });

  const { email, name } = formData;

  const onChangeAccount = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitAccount = async e => {
    e.preventDefault();

    try {
    } catch (err) {
      // TODO: Front-end errors, send in redux action?
      console.log(err);
    }
  };

  const onChangeProfile = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitProfile = async e => {
    e.preventDefault();

    try {
    } catch (err) {
      // TODO: Front-end errors, send in redux action?
      console.log(err);
    }
  };

  return (
    <Fragment>
      <h1>Profile</h1>
      <h2>Account Settings</h2>
      <p>
        <i className='fas fa-user' /> Edit your Account
      </p>
      <form onSubmit={e => onSubmitAccount(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChangeAccount(e)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChangeAccount(e)}
          />
        </div>
        <input type='submit' value='Save' />
      </form>
      <h2>Profile Settings</h2>
      <p>
        <i className='fas fa-user' /> Edit your Profile
      </p>
      <form onSubmit={e => onSubmitProfile(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value='gender'
            onChange={e => onChangeProfile(e)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value='bio'
            onChange={e => onChangeProfile(e)}
          />
        </div>
        <input type='submit' value='Save' />
      </form>
    </Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Profile);
