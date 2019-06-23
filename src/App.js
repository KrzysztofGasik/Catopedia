import React, { Component } from "react";
import ReactDom from "react-dom";
import "../scss/style.scss";

class App extends Component {
  render() {
    return <></>;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
