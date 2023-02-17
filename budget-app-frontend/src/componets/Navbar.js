
import "./Navbar.css";
import Logo from "../img/commerce-bank-logo-2x.png"
import { Link } from 'react-router-dom';

function Navbar({ logged = true }) {

    if (logged == true) {
        return (

            <nav className="navbar">
                <img src={Logo} alt="logo" style={{ width: 302.5 }} />

                <ul className="navbar-links">

                    <li><Link to="">Balance Adjustments </Link></li>
                    <li>Personal Loan Estimator</li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </nav>
        );
    }
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo" style={{ width: 302.5 }} />

            <ul className="navbar-links">


                <li><Link to="/">Signup</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;