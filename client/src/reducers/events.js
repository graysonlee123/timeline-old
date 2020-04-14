import { EVENTS_LOADED, EVENT_ADDED } from '../actions/types';

const initialState = {
  events: null,
  isLoading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EVENTS_LOADED:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case EVENT_ADDED:
      return {
        ...state,
        events: [...state.events, payload.event],
        isLoading: false,
      };
    default:
      return state;
  }
}
