import { createStore } from 'redux';
import timelineApp from './reducers/reducer'

const store = createStore(timelineApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;