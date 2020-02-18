import { SET_SESSION } from '../actions/action'

const initialState = {
  session: {}
};

function timelineApp(state = initialState, action) {
  switch (action.type) {
    case SET_SESSION:
      return Object.assign({}, state, {
        session: action.data
      });
    default:
      return state;
  }
}

export default timelineApp;
