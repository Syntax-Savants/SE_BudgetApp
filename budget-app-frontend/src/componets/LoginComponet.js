
import React, { useState } from 'react';

import "../pages/LoginPage.css";
import * as Server from "../intergration/server"
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;



        // if vaild

        //change page to home
        navigate('/home');

        // else display message incorrect username or password

        event.target.reset();
    };
    return (
        <div>
            <div className="login-container">
                <h1 className="login-header">Login to your personal budget</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input id='username'>

                    </input>
                    <label>Password:</label>

                    <input id='password' type={"password"}></input>

                    <button className='login-button'> Login</button>
                </form>
            </div>
        </div>
    );
} export default LoginComponent;


function login(username, password) {


    //login
    Server.Login(username, password);

    console.log('Logining in to ' + username);

    return true;
}
