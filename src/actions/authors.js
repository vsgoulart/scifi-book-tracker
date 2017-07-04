"use strict";

import { listAuthors } from "../utils/firebase";

export const REQUEST_AUTHORS = "REQUEST_AUTHORS";
export const RECEIVE_AUTHORS = "RECEIVE_AUTHORS";

export const requestAuthors = () => ({ type: REQUEST_AUTHORS });

export const receiveAuthors = authors => ({
  type: RECEIVE_AUTHORS,
  authors
});

export const fetchAuthors = () => dispatch => {
  dispatch(requestAuthors());
  return listAuthors()
    .then(snapshot => {
      dispatch(receiveAuthors(snapshot.val()));
    })
    .catch(error => {
      console.error(error);
    });
};
