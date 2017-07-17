"use strict";

import { createElement, Component } from "react";
import { connect } from "react-redux";

class ReadingList extends Component {
  render() {
    return <div>reading list</div>;
  }
}

export default connect()(ReadingList);
