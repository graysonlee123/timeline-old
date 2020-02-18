import { createStore } from 'redux';
import timelineApp from './reducers/reducer'

const store = createStore(timelineApp);

export default store;