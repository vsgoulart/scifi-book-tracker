"use strict";

import { Books } from "../types/data.d";
import { Action } from "../types/redux.d";
import { REQUEST_BOOKS, RECEIVE_BOOKS } from "../actions/books";

const books = (state: Books = {}, action: Action): Books => {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...action.books };
    case REQUEST_BOOKS:
    default:
      return state;
  }
};

export default books;
