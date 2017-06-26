("use strict");

import React from "react";
import { googleLogin } from "../utils/firebase";

export default () =>
  <button
    type="button"
    onClick={() => {
      googleLogin();
    }}
  >
    Google login
  </button>;
