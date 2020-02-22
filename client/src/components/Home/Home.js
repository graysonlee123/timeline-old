import React from "react";
import axios from "axios";

import { Redirect } from "react-router-dom";
import Button from "../Button";
import Spinner from "../Spinner";

export default class Home extends React.Component {
  state = {
    redirect: false,
    isLoading: true
  };

  componentDidMount = async () => {
    try {
      const {data} = await axios.get("/auth/validate");

      console.log('Data received from /auth: ', data)

      if (data.dbUser._id) {
        this.props.setSession({
          authenticated: true,
          user: data.dbUser,
          events: data.dbEvents
        });

        this.setState({ isLoading: false });
      }
    } catch (err) {
      this.setState({ isLoading: false, redirect: true });
    }
  };

  render() {
    return (
      <>
        {this.state.redirect && !this.state.isLoading && (
          <Redirect to="/login" />
        )}
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <div>
            <h3>Home</h3>
            <Button center to="/timeline" buttonStyle="accent">
              To My Timeline
            </Button>
          </div>
        )}
      </>
    );
  }
}
