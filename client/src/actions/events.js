import { EVENTS_LOADED } from './types';

// The dispatch is thanks to the thunk middleware
export const setEvents = (payload) => ({
  type: 'EVENTS_LOADED',
  payload,
});
