import React from 'react'
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/SOSpharma2.png";
function Navbar() {
  
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>Présentation</li>
            <Link to="/Listep">
            <li>Produits</li>
            </Link>
            <li>Nouveautés</li>
            <li>Actualités</li>

          
          </ul>
        </div>
        <div className="btn">
          <Link to="/Login">
            <button
              style={{ display: "block", margin: "auto" }}
              className="button"
            >
              Commandez ici !
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
