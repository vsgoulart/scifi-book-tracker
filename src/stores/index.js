"use strict";

import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, createLogger()))
  );
