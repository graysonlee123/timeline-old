import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// The dispatch is thanks to the thunk middleware
export const setAlert = (
  msg,
  alertType = 'neutral',
  timeout = 1000000
) => dispatch => {
  const id = uuidv4();

  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id
    }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const closeAlert = id => dispatch => {
  dispatch({
    type: REMOVE_ALERT,
    payload: id 
  });
};
