("use strict");

import "babel-polyfill";
import "normalize.css";
import React from "react";
import { render } from "react-dom";
import { init as firebaseInit } from "./utils/firebase";
import { Provider } from "react-redux";
import createStore from "./stores";
import { fetchAuthors } from "./actions/authors";
import { fetchBooks } from "./actions/books";
import { fetchAwards } from "./actions/awards";

import App from "./components/App";

const store = createStore();

firebaseInit(() => {
  store.dispatch(fetchAuthors());
  store.dispatch(fetchBooks());
  store.dispatch(fetchAwards());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
