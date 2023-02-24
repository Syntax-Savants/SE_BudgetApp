import Navbar from "../componets/Navbar";
import DefaultPage from "./DefaultPage";
import "./BalancePage.css"
export default function BalancePage() {
    return (

        <div>

            <Navbar />
            <div className="loan-subheader">
                <h2>
                    Welcome to Your Balance Adjustment!
                </h2>
                <h3>
                    Here you can add, update, and delete expenses at your convenience!
                </h3 >
            </div>

            <div className="balance-page-section">
                <div className="balance-page-input">

                    <div >
                        <h3>Input your Balance:</h3 >

                        <form>
                            <input type={"text"} />
                        </form >
                    </div>

                </div >

                <div className="balance-page-input" style={{ backgroundColor: "#06AADA" }}>
                    <div >
                        <h3>Input your Balance:</h3 >

                        <form>
                            <input type={"text"} />
                        </form >
                    </div>

                </div >
                <div className="balance-page-input">

                    <div >
                        <h3>Input your Balance:</h3 >

                        <form>
                            <input type={"text"} />
                        </form >
                    </div>

                </div >
            </div >
        </div >


    );
}