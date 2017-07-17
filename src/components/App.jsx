"use strict";

import { createElement } from "react";
import glamorous, { ThemeProvider } from "glamorous";

import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

const theme = {};

const RootDiv = glamorous.div({
  display: "flex",
  flexDirection: "column"
});

export default () =>
  <ThemeProvider theme={theme}>
    <RootDiv>
      <Navbar />
      <Main />
      <Footer />
    </RootDiv>
  </ThemeProvider>;
