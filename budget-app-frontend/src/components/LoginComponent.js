
import React, { useState } from 'react';

import "../pages/LoginPage.css";
import * as Server from "../intergration/server"
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
    const navigate = useNavigate();
    const [error, displayError] = useState("");

    Server.Ping().then(pingResponse => {

        if (!pingResponse)
            displayError("Cannot Connect To Server");

    });
    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        Server.Login(username, password).then(isVaild => {

            if (isVaild) {
                //change page to home
                navigate('/home');
                // else display message incorrect username or password
            } else {
                displayError("Incorrect Username Or Password");
            }
            event.target.reset();

        });
    };
    return (
        <div className="login-container">

            <h1 className="login-header">Login to your personal budget</h1>

            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username:</label>

                <input id='username'></input>

                <label>Password:</label>

                <input id='password' type={"password"}></input>

                <button className='login-button'> Login</button>
            </form>
        </div >
    );
} export default LoginComponent;