import React, { useRef, useState } from "react";
import Axios from "axios";
import "../styles/signup.css";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import sos from "../assets/images/SOSpharma2.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Signup() {
  let history = useHistory();
  const lastnameRef = useRef();
  const firstnameRef = useRef();
  const usernameRef = useRef();
  const telephoneRef = useRef();
  const emailRef = useRef();
  const adresseRef = useRef();
  const passwordRef = useRef();

  /* verification*/
  const [verfFirstname, setverfFirstname] = useState(false);
  const [verfLastname, setverfLastname] = useState(false);
  const [verfEmail, setverfEmail] = useState(false);
  const [verfPhone, setverfPhone] = useState(false);

  const verifFirstname = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(firstnameRef.current.value) === false) {
      setverfFirstname(true);
    } else {
      setverfFirstname(false);
    }
  };

  const verifLastname = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(lastnameRef.current.value) === false) {
      setverfLastname(true);
    } else {
      setverfLastname(false);
    }
  };

  const verifPhone = () => {
    const reg = new RegExp(/^[0-9]*$/);
    if (reg.test(telephoneRef.current.value) === false) {
        setverfPhone(true)
    } else {
        setverfPhone(false)
    }
}

  //  const verifEmail = () => {
  // const reg = new RegExp( /^(([.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
  //    if (reg.test(emailRef.current.value) === false) {
  // setverfEmail(true);
  //   } else {
  //    setverfEmail(false);
  //  }
  //  };
  function validate() {
    if (
      lastnameRef.current.value !== "" && !verfLastname &&
      firstnameRef.current.value !== "" && !verfFirstname &&
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
            //pathname: "/login",
          });
        } else {
           if (firstnameRef.current.value === "") {
            setverfFirstname(true);
          }
          if (lastnameRef.current.value === "") {
            setverfLastname(true);
          }
          
           if (telephoneRef.curent.value === "") {
            setverfPhone(true)
        }
        if (emailRef.current.value === "") {
            setverfEmail(true);
          }
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
            error={verfLastname}
            onChange={verifLastname}
          />
          <TextField
            fullWidth
            size="small"
            label="Prénom"
            variant="outlined"
            inputRef={firstnameRef}
            error={verfFirstname}
            onChange={verifFirstname}
          />
          <TextField
            fullWidth
            size="small"
            label="E-mail"
            variant="outlined"
            inputRef={emailRef}
            //  error={verfEmail}
            //  onBlur={verifEmail}
          />
          <TextField
            fullWidth
            size="small"
            label="Telephone"
            variant="outlined"
            inputRef={telephoneRef}
            error={verfPhone}
            onChange={verifPhone}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            size="small"
            label="Adresse pharmacie"
            variant="outlined"
            inputRef={adresseRef}
          />
          <TextField
            fullWidth
            size="small"
            label="Pseudo"
            variant="outlined"
            inputRef={usernameRef}
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
          />
        </div>
        <p>Forgot Password ?</p>
        <div className="btn1">
          <Link to="/">
            <Button
              style={{ textDecoration: "none", listStyle: "none" }}
              fullWidth
              disableElevation
              variant="contained"
              onClick={() => {
                validate()
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
