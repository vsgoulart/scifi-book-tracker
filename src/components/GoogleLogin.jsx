"use strict";

import { createElement } from "react";
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
