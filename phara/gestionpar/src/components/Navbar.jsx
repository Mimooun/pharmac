import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/SOSpharma2.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="btn">
          <button className="button">Commandez ici !</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
