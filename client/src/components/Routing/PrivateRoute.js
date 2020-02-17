import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => 
      true ? (
        <Component {...props} />
      ) : ( 
        <Redirect to='/login'/>
      )
    }
  />
)

export default PrivateRoute;

// export default class PrivateRoute extends Component {
//   state = {
//     isLoading: true,
//     isAuthenticated: false
//   }

//   componentDidMount = () => {
//     axios.get('/auth/validate')
//       .then(data => {
//         console.log('Validation: ', data);
//         this.setState({isLoading: false, isAuthenticated: true});
//       }).catch(err => {
//         console.log(err);
//         this.setState({isLoading: false});
//       })
//   }

//   render() {
//     return (
//       <div>
//        {this.state.isLoading && <Spinner />}
//        {!this.state.isLoading && !this.state.isAuthenticated && <Redirect to='/login'/>}
//        {this.state.isAuthenticated && this.props.component}
//         {/* {!this.state.isLoading && this.state.isAuthenticated ? (<div>Authenticated!</div>) : (<div>Not authenticated.</div>)} */}
//       </div>
//     )
//   }
// }