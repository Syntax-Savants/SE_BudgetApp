
import * as Server from "../intergration/server"
function Navbar(props) {


    return (
        <nav>
            <ul>
                <li>{Server.user}</li>
                <li>Personal Loan Estimator</li>
                <li>Logout</li>
            </ul>
        </nav>
    );
}

export default Navbar;