import { SET_AUTH } from '../actions/action'

const initialState = {
  authenticated: false,
  userData: {}
};

function timelineApp(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return Object.assign({}, state, {
        authenticated: action.bool
      });
    default:
      return state;
  }
}

export default timelineApp;
