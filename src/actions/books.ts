"use strict";

import { Action } from "../types/redux.d";
import { Books } from "../types/data.d";
import { listBooks } from "../utils/firebase";

export const REQUEST_BOOKS: string = "REQUEST_BOOKS";
export const RECEIVE_BOOKS: string = "RECEIVE_BOOKS";

export const requestBooks = (): Action => ({ type: REQUEST_BOOKS });

export const receiveBooks = (books: Books): Action => ({
  type: RECEIVE_BOOKS,
  books
});

export const fetchBooks = () => (dispatch: Function) => {
  dispatch(requestBooks());
  return listBooks()
    .then(snapshot => {
      dispatch(receiveBooks(snapshot.val()));
    })
    .catch(error => {
      console.error(error);
    });
};
