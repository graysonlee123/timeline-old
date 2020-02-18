import React from "react";
import axios from 'axios';

import { Redirect } from 'react-router-dom';

export default class Home extends React.Component {
  state = {
    redirect: false,
    isLoading: true
  }

  componentDidMount = async () => {
    try {
      const req = await axios.get('/auth/validate');

      console.log(req.status);

      if (req.data.passport.user) {
        console.log('Authorized! Set state with reducer now.');

        this.props.setSession({
          authenticated: true,
          userId: req.data.passport.user
        });
      } 
    } catch {
      console.log('Not authorized! - Redirect now.');
    }
  }

  render() {
    return (
      <>
        {/* {this.state.redirect && <Redirect to='/login'/>} */}
        <div>Home</div>
      </>
    )
  }
}
