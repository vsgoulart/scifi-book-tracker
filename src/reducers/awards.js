"use strict";

import { REQUEST_AWARDS, RECEIVE_AWARDS } from "../actions/awards";

const awards = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_AWARDS:
      return { ...action.awards };
    case REQUEST_AWARDS:
    default:
      return state;
  }
};

export default awards;
