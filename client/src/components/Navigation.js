import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import Button from "./Button";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // handleLogout = () => {
  //   this.props.logOut();
  //   this.props.history.push("/login");
  // }

  handleClick() {
    console.log('this: ', this)
  }

  render() {
    return (
      <nav>
        <span className="nav-left">
          <Link className="light" to="/">
            Home
          </Link>
        </span>
        <span className="nav-right">
          {this.props.authenticated ? (
            <>
              <Button to="/account">Account</Button>
              <Button onClick={this.handleClick} buttonStyle="danger">
                Log Out
              </Button>
            </>
          ) : (
            <Button to="/login">Login</Button>
          )}
        </span>
      </nav>
    );
  }
}

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired
};

export default withRouter(Navigation);
