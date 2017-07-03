"use strict";

import { Authors } from "../types/data.d";
import { Action } from "../types/redux.d";
import { REQUEST_AUTHORS, RECEIVE_AUTHORS } from "../actions/authors";

const authors = (state: Authors = {}, action: Action): Authors => {
  switch (action.type) {
    case RECEIVE_AUTHORS:
      return { ...action.authors };
    case REQUEST_AUTHORS:
    default:
      return state;
  }
};

export default authors;
