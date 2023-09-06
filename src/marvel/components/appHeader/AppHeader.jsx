import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./appHeader.css";

export const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="nav">
        <ul className="app__menu">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "black",
              })}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              to="/comics"
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "black",
              })}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
