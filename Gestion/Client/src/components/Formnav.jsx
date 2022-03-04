import React from "react";
import { Link } from "react-router-dom";
import "../styles/formnav.css";
import logo from "../assets/images/SOSpharma2.png";
import chario from '../assets/images/shopping-cart.png'

function Formnav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
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
        <div className="cart">
            <img src={chario} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Formnav;
