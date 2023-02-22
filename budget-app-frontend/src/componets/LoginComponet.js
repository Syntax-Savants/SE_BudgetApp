
import React, { useState } from 'react';

import "../pages/LoginPage.css";
import * as Server from "../intergration/Server"
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
    const navigate = useNavigate();
    const [error, displayError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;


        Server.Login(username, password).then(response => {


            if (response) {
                //change page to home
                navigate('/home');

                // else display message incorrect username or password
            } else {
                displayError("Incorrect username or password");

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
                <input id='username'>

                </input>
                <label>Password:</label>

                <input id='password' type={"password"}></input>

                <button className='login-button'> Login</button>
            </form>
        </div >
    );
} export default LoginComponent;


function login(username, password) {


    //login

    console.log('Logining in to ' + username);

    return true;
}
