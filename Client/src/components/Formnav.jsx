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
            <Link to="/"><li>Home</li></Link>
            <Link to=""><li>Shop</li></Link>
            <Link to="/Listep"><li>Products</li></Link>
            <Link to=""><li>Pages</li></Link>
            <Link to=""><li>Blog</li></Link>
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
