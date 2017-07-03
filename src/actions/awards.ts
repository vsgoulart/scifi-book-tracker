"use strict";

import { Action } from "../types/redux.d";
import { Awards } from "../types/data.d";
import { listAwards } from "../utils/firebase";

export const REQUEST_AWARDS = "REQUEST_AWARDS";
export const RECEIVE_AWARDS = "RECEIVE_AWARDS";

export const requestAwards = (): Action => ({ type: REQUEST_AWARDS });

export const receiveAwards = (awards: Awards) => ({
  type: RECEIVE_AWARDS,
  awards
});

export const fetchAwards = () => (dispatch: Function) => {
  dispatch(requestAwards());
  return listAwards()
    .then(snapshot => {
      dispatch(receiveAwards(snapshot.val()));
    })
    .catch(error => {
      console.error(error);
    });
};
