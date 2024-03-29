
import LoginComponent from "../components/LoginComponent";
import Navbar from "../components/Navbar";
import DecorCircle from "../components/CalendarPage/DecorCircle";

import "./LoginPage.css"
function LoginPage() {
    return (
        <div style={{ height: "100vh" }}>
            <Navbar logged={false} />
            <div className="login-page">
                <LoginComponent />
                <LoginDecor />
            </div>
        </div>
    );
}

function LoginDecor() {
    return <div className="login-decor-container">
        <DecorCircle color={"#6CB134"} x={0} y={40} size={150} />
        <DecorCircle color={"#4CA7D5"} x={170} y={20} size={125} />
        <DecorCircle color={"#F7D149"} x={150} y={250} size={190} />
    </div>
}


export default LoginPage;