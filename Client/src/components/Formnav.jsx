import React from "react";
import { Link } from "react-router-dom";
import "../styles/formnav.css";
import doctor from "../assets/images/diagnosis.png";
import chario from "../assets/images/shopping-cart.png";

function Formnav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="usr-area">
          <div className="content">
            <img src={doctor} />
            <div className="usr-text">
              <span>Mimoun</span>
            </div>
          </div>
        </div>
        <div className="menu">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="">
              <li>Shop</li>
            </Link>
            <Link to="/Listep">
              <li>Products</li>
            </Link>
            <Link to="">
              <li>Pages</li>
            </Link>
            <Link to="">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="cart">
          <Link to="/panier">
            <img src={chario} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Formnav;
