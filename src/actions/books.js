"use strict";

import { listBooks } from "../utils/firebase";

export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

export const requestBooks = () => ({ type: REQUEST_BOOKS });

export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

export const fetchBooks = () => dispatch => {
  dispatch(requestBooks());
  return listBooks()
    .then(snapshot => {
      dispatch(receiveBooks(snapshot.val()));
    })
    .catch(error => {
      console.error(error);
    });
};
