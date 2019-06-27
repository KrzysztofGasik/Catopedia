import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Menu } from "./Components/Menu/Menu";
import { MainWindow } from "./Components/MainWindow/MainWindow";
import { Footer } from "./Components/Footer/Footer";
import "../scss/style.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Menu />
        <MainWindow />
        <Footer />
      </BrowserRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
