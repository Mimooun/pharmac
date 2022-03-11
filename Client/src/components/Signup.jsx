import React from "react";
import "../styles/signup.css";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import sos from "../assets/images/SOSpharma2.png";
import {Link} from "react-router-dom"

function Signup() {
  return (
    <section className="signUp1">
      <div className="container__form1">
        <div className="inputz">
          <div className="icon-container1">

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
        <div className="btn1">
          <Link to="/">
            <Button style={{textDecoration:"none" , listStyle:"none"}} fullWidth disableElevation variant="contained">
              GO !
            </Button>

          </Link>
        </div>
      </div>
    </section>
  );
}

export default Signup;
