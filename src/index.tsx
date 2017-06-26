("use strict");

import "babel-polyfill";
import "normalize.css";
import React from "react";
import { render } from "react-dom";
import { init as firebaseInit, listenLogin } from "./utils/firebase";

import App from "./components/App";

firebaseInit();
listenLogin((user: Function) => {
  console.log(user);
});

render(<App />, document.getElementById("root"));
