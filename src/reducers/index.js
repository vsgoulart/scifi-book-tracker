"use strict";

import { combineReducers } from "redux";

import authors from "./authors";
import books from "./books";
import awards from "./awards";

export default combineReducers({ authors, books, awards });
