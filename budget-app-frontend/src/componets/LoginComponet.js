
import React, { useState } from 'react';

import "../pages/LoginPage.css";


function LoginComponent() {


    return (
        <div>
        <div className="login-container">
            <h1 className="login-header">Login to your personal budget</h1>
            <form className="login-form">
                <label>Username:</label>
                <input>

                </input>
                <label>Password:</label>

                <input type={"password"}></input>

                <button className='login-button'> Login</button>
            </form>
        </div>
</div>
    );
} export default LoginComponent;


function login(username, password) {
    //login
    //change page to home
}
