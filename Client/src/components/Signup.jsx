import React from "react";
import "../styles/signup.css";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import {sos} from "../assets/images/SOSpharma2.png"

function Signup() {
  return (
    <section className="signUp">
    <div className="container__form">

      <div className="inputs">
      <div className="icon-container">
          <img src={sos} alt="" />
        </div>
        <TextField
          fullWidth
          size="small"
          label="Firstname"
          variant="outlined"
        />
        <TextField
          fullWidth
          autoComplete="current-password"
          size="small"
          label="Lastname"
          variant="outlined"
        />
          <TextField
          fullWidth
          type="password"
          autoComplete="current-password"
          size="small"
          label="Password"
          variant="outlined"
        />
          <TextField
          fullWidth
          type="password"
          autoComplete="current-password"
          size="small"
          label="Confirm Password"
          variant="outlined"
        />
      </div>
      <p>Forgot Password ?</p>
      <div className="btn">
        <Button
         
          fullWidth
          disableElevation
          variant="contained"
        >
          Signup
        </Button>
        
      </div>
    </div>
  </section>
  );
}

export default Signup;
