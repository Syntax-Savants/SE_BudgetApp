
import "./Navbar.css";
import Logo from "../img/commerce-bank-logo-2x.png"
import { Link } from 'react-router-dom';
import { Logout } from "../intergration/server"
function Navbar({ logged = true, pageID, extraElement }) {

    if (logged == true) {
        return (

            <nav className="navbar">
                <img src={Logo} alt="logo" style={{ width: 302.5 }} />
                {extraElement}
                <ul className="navbar-links">


                    <li ><Link to="/home">Home </Link></li>

                    <li><Link to="/balance">Balance Adjustments </Link></li>

                    <li ><Link to="/loan">Personal Loan Estimator</Link></li>
                    <li><Link onClick={() => {
                        Logout();
                    }} to="/">Logout</Link></li>
                </ul>
            </nav>
        );
    }
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo" style={{ width: 302.5 }} />

            <ul className="navbar-links">

                <li>

                    <Link to="/signup">Signup</Link>

                </li>
            </ul>
        </nav>
    );
}

export default Navbar;