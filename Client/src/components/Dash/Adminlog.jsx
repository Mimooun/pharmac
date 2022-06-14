import React, { useState } from 'react'
import "../../styles/Dash/adminlog.css";
import logo from "../../assets/images/SOSpharma2.png";
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button'
import Axios from 'axios'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

function SignUp({ loggedIn }) {

    let history = useHistory();
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [authfailed, SetAuthFailed] = useState(false);


    function submitLogin() {
        Axios.post("http://localhost:3001/loginadmin", { username: username, password: password }).then((response) => {

            if (response.data.length > 0) {
                history.push({
                    pathname: '/Dash',
                    loggedIn: true,
                });
            } else if (response.data.message === "Authentication failed") {
                SetAuthFailed(true)
            }
        })
    }

    if (loggedIn) {
        return (
            <Redirect to="/Adminlog" />
        )
    } else {
        return (
            <section className="sgn">
                <div className="container__form">
                    <Alert className={authfailed ? "active" : ""} severity="error" onClose={() => { SetAuthFailed(false) }}>Authentication failed - try again!</Alert>
                    <div className="icon-container">
                        <img src={logo} alt="" />
                    </div>
                    <h1>Welcome Back !</h1>
                    <div className="inputs">
                        <TextField error={authfailed} onChange={(e) => { SetAuthFailed(false); SetUsername(e.target.value) }} fullWidth size="small" label="Username" variant="outlined" />
                        <TextField error={authfailed} onChange={(e) => { SetAuthFailed(false); SetPassword(e.target.value) }} fullWidth type="password"
                            autoComplete="current-password" size="small" label="Password" variant="outlined" />
                    </div>
                    <p>Forgot Password ?</p>
                    <div className="btn">
                        <Button onClick={() => { submitLogin() }} fullWidth disableElevation variant="contained">Login</Button>
                    </div>
                </div>
            </section>
        )
    }
}

export default SignUp