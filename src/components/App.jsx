"use strict";

import { createElement } from "react";

import GoogleLogin from "./GoogleLogin";
import Logout from "./Logout";

export default () =>
  <div>
    <GoogleLogin />
    <Logout />
  </div>;
