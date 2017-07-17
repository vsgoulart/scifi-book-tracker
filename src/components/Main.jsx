"use strict";

import { createElement } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import glamorous from "glamorous";

import Home from "../containers/Home";
import ReadingList from "../containers/ReadingList";

const Main = glamorous.main({
  display: "flex",
  justifyContent: "center"
});

export default () =>
  <Main>
    <Route path="/" exact component={Home} />
    <Route path="/readingList" component={ReadingList} />
  </Main>;
