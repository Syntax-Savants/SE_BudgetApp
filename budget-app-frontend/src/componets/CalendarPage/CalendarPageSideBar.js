import "./CalendarPageSideBar.css"
import Checkbox from "../ui/CheckBox";
import * as Utils from "../../utils/Utils"


export default function CalendarPageSideBar() {





    return (
        <div className="CSideBar">
            <div>

                <SideBarInput display={Utils.formatMoney(10)} label={"My Savings Goal"} style={{ display: 'block', margin: 'auto', backgroundColor: "#FFCF0D" }} />
                <div style={{ display: 'inline-block' }}>

                    <SideBarInput label="My Goal is..." display={Utils.formatMoney(2500)} style={{ backgroundColor: "#33826A", margin: '0 10px 0 0' }} />

                    <SideBarInput label="You are" display={"Under"} style={{ margin: '0 0px 0 0' }} />
                </div>
            </div>
            <div className="my-calendars">
                <h3>My Calendars</h3>

                <Checkbox textColor={"#06AADA"} text={"Planned Expenses"} />
                <Checkbox textColor={"#70C02F"} text={"Unplanned Expenses"} />
                <Checkbox textColor={"#33826A"} text={"Other"} />

                <button className="login-button">Add Expense</button>
            </div>
        </div>
    );
};



function SideBarInput({ display, label, style }) {

    return (

        <div className="CSideBar-input" style={style}>

            <div className="CSSideBar-input-display">
                <label>{label}</label>
                <p>{display}</p>
            </div>
        </div >
    );

}

