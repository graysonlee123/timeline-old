import { EVENTS_LOADED } from '../actions/types';

const initialState = {
  events: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EVENTS_LOADED:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
