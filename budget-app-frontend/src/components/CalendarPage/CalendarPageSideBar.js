import "./CalendarPageSideBar.css"
import Checkbox from "../ui/CheckBox";
import * as Utils from "../../utils/Utils"
import { BudgetAdjustment } from "../../class/BudgetAdjustment"

import { getCurrentUser } from "../../Global"
import { useEffect } from "react";
const testDate = new Date(2023, 2, 3);

export default function CalendarPageSideBar({ reload }) {

    function addExpense() {
        //  constructor(name, type, date, amount) {
        console.log("add expense");

        getCurrentUser().addBudgetAdjustment(new BudgetAdjustment(
            "test", 0, testDate, 50));
        reload(getCurrentUser().budgetAdjustments);
    }
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

                <Checkbox onChange={checkPlannedExpenses} textColor={"#06AADA"} text={"Planned Expenses"} />
                <Checkbox onChange={checkUnplannedExpenses} textColor={"#70C02F"} text={"Unplanned Expenses"} />
                <Checkbox onChange={checkOther} textColor={"#33826A"} text={"Other"} />

                <button onClick={addExpense} className="login-button">Add Expense</button>
            </div>
        </div>
    );
};

function checkPlannedExpenses(value) {
    console.log(value);

}

function checkUnplannedExpenses(value) {
    console.log(value);

}
function checkOther(value) {
    console.log(value);

}
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

