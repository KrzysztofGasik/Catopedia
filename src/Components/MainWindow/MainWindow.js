import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { CatImage } from "../CatImage/CatImage";
import { CatFact } from "../CatFact/CatFact";
import { CatQuote } from "../CatQuote/CatQuote";

export const MainWindow = () => {
  return (
    <main className="main__window">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cat-image" component={CatImage} />
        <Route path="/cat-fact" component={CatFact} />
        <Route path="/cat-quote" component={CatQuote} />
      </Switch>
    </main>
  );
};
