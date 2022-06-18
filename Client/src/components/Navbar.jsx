import "../styles/navbar.css";
import logo from "../assets/images/SOSpharma2.png";
import React, { useState , useRef } from "react";
import "../styles/login.css";
import sos from "../assets/images/SOSpharma2.png";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  let history = useHistory();
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [authfailed, SetAuthFailed] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  function scrollToTestDiv(){
    const divElement = document.getElementById('test');
    divElement.scrollIntoView({ behavior: 'smooth' , block :'start'});
  }
  function scrollToTestDiv2(){
    const divElement = document.getElementById('test2');
    divElement.scrollIntoView({ behavior: 'smooth' , block :'start'});
  }
  function scrollToTestDiv3(){
    const divElement = document.getElementById('test3');
    divElement.scrollIntoView({ behavior: 'smooth' , block :'start'});
  }
  function show() {
    if (showSignIn) {
      setShowSignIn(false);
    } else {
      setShowSignIn(true);
    }
  }

  function submitLogin() {
    Axios.post("http://localhost:3001/Login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.length > 0) {
        history.push({
          pathname: "/Form",
        });
      } else if (response.data.message === "Authentication failed") {
        SetAuthFailed(true);
      }
    });
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu">
          <ul>
          <a className="nav-link3" onClick={scrollToTestDiv3}> <li>Présentation</li>   </a>
            <Link to="/Listep">
              <li>Produits</li>
            </Link>
           <a className="nav-link" onClick={scrollToTestDiv}> <li>Nouveautés</li>   </a>
           <a className="nav-link2" onClick={scrollToTestDiv2}> <li>Actualités</li>   </a>
          </ul>
        </div>
        <div className="btn">
          <button
            onClick={show}
            style={{ display: "block", margin: "auto" }}
            className="button"
          >
            Commandez ici !
          </button>
        </div>
      </div>
      <section className={showSignIn ? "signUp active" : "signUp"}>
        <div className="signIn-overlay" onClick={show}></div>
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
          </div>
          <div className="register">
            <Link to="/Signup">
              <p>
                Don't have an account ? <span className="lien">Register</span>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
