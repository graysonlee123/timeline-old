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
    case "LOGOUT":
      return {...state, authenticated: false, userId: null}
    default:
      return state;
  }
};

export default session;
