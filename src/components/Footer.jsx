"use strict";

import { createElement } from "react";
import { NavLink } from "react-router-dom";
import glamorous from "glamorous";

const Footer = glamorous.footer({
  display: "flex",
  justifyContent: "center"
});

export default () =>
  <Footer>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/readingList">Reading list</NavLink>
  </Footer>;
