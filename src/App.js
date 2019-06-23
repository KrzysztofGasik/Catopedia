import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Menu } from "./Components/Menu/Menu";
import "../scss/style.scss";
import { MainWindow } from "./Components/MainWindow/MainWindow";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Menu />
        <MainWindow />
        <span style={{color: 'white'}}>Photo by Pacto Visual on Unsplash</span>
      </BrowserRouter>
      
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
