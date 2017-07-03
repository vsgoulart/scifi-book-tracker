"use strict";

import { Authors, Books, Awards } from "./data.d";

export interface Action {
  readonly type: string;
  readonly authors?: Authors;
  readonly books?: Books;
  readonly awards?: Awards;
}
