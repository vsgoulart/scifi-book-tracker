("use strict");

import React from "react";
import { logout } from "../utils/firebase";

export default () =>
  <button
    type="button"
    onClick={() => {
      logout();
    }}
  >
    Logout
  </button>;
