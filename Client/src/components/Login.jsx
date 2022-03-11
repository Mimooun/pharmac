import React, { useState } from "react";
import "../styles/login.css";
import sos from "../assets/images/SOSpharma2.png";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  let history = useHistory();
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [authfailed, SetAuthFailed] = useState(false);

  function submitLogin() {
    Axios.post("http://localhost:3001/Login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.length > 0) {
        history.push({
<<<<<<< HEAD
<<<<<<< Updated upstream
          pathname: "/Form",
        });
=======
                    pathname: '/Form',
                    
                });
        
>>>>>>> Stashed changes
=======
                    pathname: '/Form',
                    
                 });

        
>>>>>>> 9ae589b42b715ab3b473450cb5ccc802a46d4835
      } else if (response.data.message === "Authentication failed") {
        SetAuthFailed(true);
      }
    });
  }

  return (
    <section className="signUp">
      <div className="container__form">
        <Alert
          className={authfailed ? "active" : ""}
          severity="error"
          onClose={() => {
            SetAuthFailed(false);
          }}
        >
          Authentication failed - try again!
        </Alert>
        <div className="icon-container">
          <img src={sos} alt="" />
        </div>
        <div className="inputs">
          <TextField
            error={authfailed}
            onChange={(e) => {
              SetAuthFailed(false);
              SetUsername(e.target.value);
            }}
            fullWidth
            size="small"
            label="Username"
            variant="outlined"
          />
          <TextField
            error={authfailed}
            onChange={(e) => {
              SetAuthFailed(false);
              SetPassword(e.target.value);
            }}
            fullWidth
            type="password"
            autoComplete="current-password"
            size="small"
            label="Password"
            variant="outlined"
          />
        </div>
        <p>Forgot Password ?</p>
        <div className="btn">
          <Button
            onClick={() => {
              submitLogin();
            }}
            fullWidth
            disableElevation
            variant="contained"
          >
            Login
          </Button>
<<<<<<< HEAD
        </div>
        <div className="register">
          <Link to="/Signup">
            <p>
              Don't have a compte <span className="lien">Register</span>
            </p>
=======
          <Link to="/signup">
            <Button
              style={{ marginTop: "20px",
            textDecoration:"none" }}
              onClick={() => {
                submitLogin();
              }}
              fullWidth
              disableElevation
              variant="contained"
            >
              Create Account!
            </Button>
>>>>>>> 9ae589b42b715ab3b473450cb5ccc802a46d4835
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
