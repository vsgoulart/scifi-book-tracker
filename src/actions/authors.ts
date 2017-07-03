"use strict";

import { Action } from "../types/redux.d";
import { Authors } from "../types/data.d";
import { listAuthors } from "../utils/firebase";

export const REQUEST_AUTHORS: string = "REQUEST_AUTHORS";
export const RECEIVE_AUTHORS: string = "RECEIVE_AUTHORS";

export const requestAuthors = (): Action => ({ type: REQUEST_AUTHORS });

export const receiveAuthors = (authors: Authors): Action => ({
  type: RECEIVE_AUTHORS,
  authors
});

export const fetchAuthors = () => (dispatch: Function) => {
  dispatch(requestAuthors());
  return listAuthors()
    .then(snapshot => {
      dispatch(receiveAuthors(snapshot.val()));
    })
    .catch(error => {
      console.error(error);
    });
};
