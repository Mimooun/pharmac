import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import sos from "../assets/images/SOSpharma2.png";

function Login() {
  return (
    <section className="login-form">
      <div className="title">
        <img src={sos} alt="" />
      </div>
      <div className="inputs">
        <input type="text" placeholder="Entrer votre username" />
        <input type="password" placeholder="Entrer le mot de passe " />
      </div>

      <div className="btn">
        <Link to="/form">
          <button>Login</button>
        </Link>
      </div>
    </section>
  );
}

export default Login;
