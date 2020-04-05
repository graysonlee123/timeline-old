import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateAccount } from '../../../actions/auth';

import Menu from '../Menu';

const Account = ({ user, updateAccount }) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    avatar: user.avatar || '',
    gender: user.gender,
  });

  const { first_name, last_name, email, avatar, gender } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { first_name, last_name, email, avatar, gender };

      updateAccount(payload);
    } catch (err) {
      // TODO: Front-end errors, send in redux action?
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className='content'>
        <form onSubmit={(e) => onSubmit(e)}>
          <h2>Account Information</h2>
          <div className='input-group'>
            <label>First Name</label>
            <input
              type='text'
              placeholder='First name'
              name='first_name'
              value={first_name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='input-group'>
            <label>Last Name</label>
            <input
              type='text'
              placeholder='Last name'
              name='last_name'
              value={last_name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='input-group'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type='submit' value='Save' />
          <h2>General Information</h2>
          <div className='input-group'>
            <label>Avatar</label>
            <input
              type='text'
              placeholder='Avatar URL'
              name='avatar'
              value={avatar}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='input-group'>
            <label>Gender</label>
            <select name='gender' value={gender} onChange={(e) => onChange(e)}>
              <option value='none'></option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <input type='submit' value='Save' />
        </form>
      </div>
      <div className='nav'>
        <div className="nav-left">
          Done
        </div>
        <div className="nav-right">
          <Menu />
        </div>
      </div>
    </Fragment>
  );
};

Account.propTypes = {
  updateAccount: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { updateAccount })(Account);
