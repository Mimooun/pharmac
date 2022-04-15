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
        <div className="search-area">
          <Stack>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="choix catégorie"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  inputRef={medicamentRef}
                  onChange={verfNamemedicament}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </nav>
  );
}

export default Formnav;
