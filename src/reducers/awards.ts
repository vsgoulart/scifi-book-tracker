"use strict";

import { Awards } from "../types/data.d";
import { Action } from "../types/redux.d";
import { REQUEST_AWARDS, RECEIVE_AWARDS } from "../actions/awards";

const awards = (state: Awards = {}, action: Action): Awards => {
  switch (action.type) {
    case RECEIVE_AWARDS:
      return { ...action.awards };
    case REQUEST_AWARDS:
    default:
      return state;
  }
};

export default awards;
