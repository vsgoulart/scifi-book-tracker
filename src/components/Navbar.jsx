"use strict";

import { createElement } from "react";
import { NavLink } from "react-router-dom";
import glamorous from "glamorous";

const Nav = glamorous.nav({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
});

export default () =>
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/readingList">Reading list</NavLink>
  </Nav>;
