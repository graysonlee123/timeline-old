import { SET_SESSION } from "../actionTypes";

const initialState = {
  authenticated: false,
  userId: null
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SESSION":
      return Object.assign({}, state, {
        authenticated: action.session.authenticated,
        userId: action.session.userId
      });
    default:
      return state;
  }
};

export default session;
