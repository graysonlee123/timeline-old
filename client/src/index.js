import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import rootReducer from "./reducers/reducer";

import toggleAuth from './actions/action'

import App from "./App";

const rootElement = document.getElementById("root");

// Initial log
console.log("store: ", store.getState());

// Log every time state changes
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(toggleAuth(true));
store.dispatch(toggleAuth(false));
store.dispatch(toggleAuth(true));
store.dispatch(toggleAuth(false));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);

// ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
