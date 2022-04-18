import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/listepnav.css";
import doctor from "../assets/images/diagnosis.png";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Axios from "axios";
function Formnav() {
  const [categorie, setcategorie] = useState([""]);
  const medicamentRef = useRef();
  const [verfNamemedicament, setverfNamemedicament] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/categories").then((response) => {
      setcategorie(response.data);
    });
  }, []);
  const verifNomMedicament = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(medicamentRef.current.value) === false) {
      setverfNamemedicament(true);
    } else {
      setverfNamemedicament(false);
    }
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="usr-area">
          <div className="content">
            <img src={doctor} />
            <div className="usr-text">
              <span>zaki</span>
            </div>
          </div>
        </div>
        <div className="menu">
          <ul>
            <Link to="/">
              <li>Présentation</li>
            </Link>
            <Link to="/Listep">
              <li>Produits</li>
            </Link>
            <Link to="">
              <li>Nouveatés</li>
            </Link>
            <Link to="">
              <li>Actualités</li>
            </Link>
           
          </ul>
        </div>
       
      </div>
    </nav>
  );
}

export default Formnav;
