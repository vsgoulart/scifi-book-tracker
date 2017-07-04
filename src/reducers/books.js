"use strict";

import { REQUEST_BOOKS, RECEIVE_BOOKS } from "../actions/books";

const books = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...action.books };
    case REQUEST_BOOKS:
    default:
      return state;
  }
};

export default books;
