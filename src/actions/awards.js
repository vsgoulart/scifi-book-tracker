"use strict";

import { listAwards } from "../utils/firebase";

export const REQUEST_AWARDS = "REQUEST_AWARDS";
export const RECEIVE_AWARDS = "RECEIVE_AWARDS";

export const requestAwards = () => ({ type: REQUEST_AWARDS });

export const receiveAwards = awards => ({
  type: RECEIVE_AWARDS,
  awards
});

export const fetchAwards = () => dispatch => {
  dispatch(requestAwards());
  return listAwards()
    .then(snapshot => {
      dispatch(receiveAwards(snapshot.val()));
    })
    .catch(error => {
      console.error(error);
    });
};
