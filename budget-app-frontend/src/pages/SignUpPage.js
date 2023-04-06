import * as Server from "../intergration/server"
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {

    const navigate = useNavigate();

    function handleSubmit(e) {

        Server.SignUp(e.target.username.value, e.target.password.value, e.target.firstName.value, e.target.lastName.value)
        navigate("/");

    }

    return <div>

        <div className="login-container">

            <form onSubmit={handleSubmit} className="login-form">

                <label>First Name:</label>

                <input id='firstName'></input>

                <label>Last Name:</label>

                <input id='lastName'></input>

                <label>Username:</label>
                <input id='username'/>
                <label>Password:</label>

                <input id='password' type={"password"}></input>

                <button className='login-button'> Login</button>        </form >
        </div>

    </div>;
}