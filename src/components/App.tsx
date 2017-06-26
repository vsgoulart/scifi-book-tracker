("use strict");

import React, { Component } from "react";

import GoogleLogin from "./GoogleLogin";
import Logout from "./Logout";

class App extends Component {
  render() {
    return (
      <div>
        <GoogleLogin />
        <Logout />
      </div>
    );
  }
}

export default App;
