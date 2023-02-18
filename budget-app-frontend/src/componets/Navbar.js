
import "./Navbar.css";
import Logo from "../img/commerce-bank-logo-2x.png"
import { Link } from 'react-router-dom';

function Navbar({ logged = true, hide }) {

    if (logged == true) {
        return (

            <nav className="navbar">
                <img src={Logo} alt="logo" style={{ width: 302.5 }} />

                <ul className="navbar-links">


                    <li><Link to="/home">Home </Link></li>

                    <li><Link to="/balance">Balance Adjustments </Link></li>

                    <li ><Link to="/loan">Personal Loan Estimator</Link></li>
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