import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const MenuElements = [
  {
    path: "/",
    name: "Home",
    icon: "fas fa-home"
  },
  {
    path: "/cat-image",
    name: "Cat image",
    icon: "far fa-image"
  },
  {
    path: "/cat-fact",
    name: "Cat fact",
    icon: "far fa-question-circle"
  },
  {
    path: "/cat-quote",
    name: "Cat quote",
    icon: "fas fa-quote-right"
  }
];

export const Menu = () => {
  return (
    <nav>
      <ul>
        {MenuElements.map(item => (
          <li key={item.path}>
            <NavLink exact to={item.path}>
              <i className={item.icon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
