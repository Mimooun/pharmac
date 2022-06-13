import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../styles/Dash/adminlog.css";
import { Link } from "react-router-dom";
import adlg from "../../assets/images/SOSpharma2.png";

function Adminlog() {
  return (
    <section className="adminform">
      <div className="admininputs">
        <div className="logoadmin">
          <img src={adlg} alt="" />
        </div>
        <TextField
          style={{ display: "flex", margin: "auto", width: "60%" }}
          id="outlined-basic"
          label="Login"
          variant="outlined"
        />
        <TextField
          style={{ display: "flex", margin: "auto", width: "60%" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Link to="/Dash">
          <Button
            style={{ display: "block", margin: "auto", background: "#3ecfa3" }}
            variant="contained"
          >
            glbtli kri
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Adminlog;
