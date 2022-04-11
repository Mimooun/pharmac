import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom";
import "../styles/formnav.css";
import doctor from "../assets/images/diagnosis.png";
import chario from "../assets/images/shopping-cart.png";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { useHistory } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
function Formnav() {
  const [lastname, setLastname] = useState();
  
  let history = useHistory();
  const [id_utilisateur, setId_utilisateur] = useState();
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      setId_utilisateur(response.data.id);
      setLastname(response.data.lastname);
    });
  }, []);

  function goPanier(){
    history.push({
      pathname: "/Panier",
      id: id_utilisateur,
    });
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="usr-area">
          <div className="content">
            <img src={doctor} />
            <div className="usr-text">
              <span>{lastname}</span>
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
          <div className="cart" onClick={goPanier}>
              <img src={chario} alt="" />
          </div>
      </div>
    </nav>
  );
}

export default Formnav;
