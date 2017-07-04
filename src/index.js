"use strict";

import "babel-polyfill";
import "normalize.css";
import { createElement } from "react";
import { render } from "react-dom";
import { init as firebaseInit } from "./utils/firebase";
import { Provider } from "react-redux";
import createStore from "./stores";

import App from "./components/App";

const store = createStore();

firebaseInit();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
