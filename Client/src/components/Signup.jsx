import React from "react";
import "../styles/signup.css";
import TextField from "@mui/material/TextField";

function Signup() {
  return (
    <section>
      <div className="area">
        <div className="one">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div className="two">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </div>
      </div>
    </section>
  );
}

export default Signup;
