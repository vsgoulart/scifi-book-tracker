"use strict";

import { REQUEST_AUTHORS, RECEIVE_AUTHORS } from "../actions/authors";

const authors = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_AUTHORS:
      return { ...action.authors };
    case REQUEST_AUTHORS:
    default:
      return state;
  }
};

export default authors;
