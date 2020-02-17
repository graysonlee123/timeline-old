import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

export default class PrivateRoute extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false
  }

  componentDidMount = () => {
    axios.get('/auth/validate')
      .then(data => {
        console.log('Validation: ', data);
        this.setState({isLoading: false, isAuthenticated: true});
      }).catch(err => {
        console.log(err);
        this.setState({isLoading: false});
      })
  }

  render() {
    return (
      !this.state.isLoading && this.state.isAuthenticated ? (<div>Authenticated!</div>) : (<div>Not authenticated.</div>)
    )
  }
}