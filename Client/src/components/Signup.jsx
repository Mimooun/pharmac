import React, { useRef } from "react";
import Axios from "axios";
import "../styles/signup.css";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import sos from "../assets/images/SOSpharma2.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function SignupTextFields() {
  let history = useHistory();
  const lastnameRef = useRef();
  const firstnameRef = useRef();
  const usernameRef = useRef();
  const telephoneRef = useRef();
  const emailRef = useRef();
  const adresseRef = useRef();
  const passwordRef = useRef();
  const confirmationpasswordRef = useRef();
  function validate() {
    if (
      lastnameRef.current.value !== "" &&
      firstnameRef.current.value !== "" &&
      usernameRef.current.value !== "" &&
      emailRef.current.value !== "" &&
      telephoneRef.current.value !== "" &&
      adresseRef.current.value !== "" &&
      passwordRef.current.value !== "" 
    ) { 
      
      Axios.post("http://localhost:3001/addutilisateur", {
        lastnameRef: lastnameRef.current.value,
        firstnameRef: firstnameRef.current.value,
        usernameRef: usernameRef.current.value,
        emailRef: emailRef.current.value,
        telephoneRef: telephoneRef.current.value,
        adresseRef: adresseRef.current.value,
        passwordRef: passwordRef.current.value,
      }).then((response) => {
        if (response.data.message === "Operation completed") {
          /** redirect to  list */
          console.log("Operation Completed");
          history.push({
            pathname: "/Login",
          });
        }
      });
    }
  }
  return (
    <section className="signUp1">
      <div className="container__form1">
        <div className="icon-container1">
          <img src={sos} alt="" />
        </div>
        <div className="inputz">
          <TextField
            fullWidth
            size="small"
            label="Nom"
            variant="outlined"
            inputRef={lastnameRef}
          />
          <TextField
            fullWidth
            size="small"
            label="Prénom"
            variant="outlined"
            inputRef={firstnameRef}
          />
          <TextField
            fullWidth
            size="small"
            label="E-mail"
            variant="outlined"
            inputRef={usernameRef}
          />
          <TextField
            fullWidth
            size="small"
            label="Telephone"
            variant="outlined"
            inputRef={emailRef}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            size="small"
            label="Adresse pharmacie"
            variant="outlined"
            inputRef={telephoneRef}
          />
          <TextField
            fullWidth
            size="small"
            label="Pseudo"
            variant="outlined"
            inputRef={adresseRef}
          />
          <TextField
            fullWidth
            type="password"
            autoComplete="current-password"
            size="small"
            label="Mot de passe"
            variant="outlined"
            inputRef={passwordRef}
          />
          <TextField
            fullWidth
            type="password"
            autoComplete="current-password"
            size="small"
            label="Confirmer mot de passe"
            variant="outlined"
            inputRef={confirmationpasswordRef}
          />
        </div>
        <p>Forgot Password ?</p>
        <div className="btn1">
          <Link to="/Login">
            <Button
              style={{ textDecoration: "none", listStyle: "none" }}
              fullWidth
              disableElevation
              variant="contained"
              onClick={() => {
                validate();
              }}
            >
              GO !!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
