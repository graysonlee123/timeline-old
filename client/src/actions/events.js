import { EVENTS_LOADED } from './types';
import axios from 'axios';

// The dispatch is thanks to the thunk middleware
export const setEvents = (payload) => ({
  type: 'EVENTS_LOADED',
  payload,
});

export const addEvent = (payload) => async (dispatch) => {
  try {
    const res = await axios.post('/api/event/', payload);
    console.log(res);
    dispatch({
      type: 'EVENT_ADDED',
      payload: res.data,
    });
  } catch (err) {
    // TODO: Dispatch error
    console.log(err);
  }
};
