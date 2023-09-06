import React from "react";
import {  Outlet } from "react-router-dom";
import { CustumLink } from "../style/CustumLink";

export const Layout = () => {
  return (
    <>
      <header>
        <CustumLink to="/">Home</CustumLink>
        <CustumLink to="/posts">Blog</CustumLink>
        <CustumLink to="/about">About</CustumLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">&copy;2022 experiment
      </footer>
    </>
  );
};
 