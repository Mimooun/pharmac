import React from "react";
import contct from "../assets/images/contct.jpg";
import contact from "../styles/footer.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <section id="sect4" className="contact">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div className="title">Contact Us</div>
      <div className="cnt">
        <div className="left">
          <img src={contct} alt="" />
        </div>
        <div className="right">
          <div className="subtitle">Contact</div>
          <div className="inputs">
            <TextField
              required
              id="outlined-required"
              label="First Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
            />
            <TextField
              required
              id="outlined-required"
              label="E-mail"
            />
            <TextField
              required
              id="outlined-required"
              label="Phone"
            />
            <div className="btn">
              <Button variant="contained" style={{backgroundColor:'#3ecfa3'}} size="medium">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
