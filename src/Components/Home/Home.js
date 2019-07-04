import React, { Component } from "react";

const Home = () => {
  return (
    <div className="home__wrapper">
      <h2>Hey there, welcome to Catopedia, app about cats - meow you</h2>
      <div className="cat">
        <div className="ear ear__left" />
        <div className="ear ear__right" />
        <div className="head">
          <div className="eye__left">
            <div className="eye__close" />
            <div className="eye__left__circle" />
          </div>
          <div className="eye__right">
          <div className="eye__close" />
            <div className="eye__right__circle" />
          </div>
          <div className="nose">
            <div className="whisker__left__1" />
            <div className="whisker__left__2" />
            <div className="whisker__left__3" />
            <div className="whisker__right__1" />
            <div className="whisker__right__2" />
            <div className="whisker__right__3" />
          </div>
          <div className="mouth">
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
