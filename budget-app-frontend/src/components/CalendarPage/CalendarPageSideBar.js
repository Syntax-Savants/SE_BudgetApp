import "./CalendarPageSideBar.css"
import Checkbox from "../ui/CheckBox";
import * as Utils from "../../utils/Utils"
import { getBudgetAdjustmentsfromServer,addBudgetAdjustmentToServer } from "../../intergration/server";
import { getCurrentUser } from "../../Global"
import { BudgetAdjustment } from "../../class/BudgetAdjustment";
let showPlanned;
let showUnplanned;
export default function CalendarPageSideBar({ currentMonth, setBudgetAdjustments, showPlanned, showUnplanned }) {

    function addExpense() {

        var username = getCurrentUser().username;
        var password = getCurrentUser().password;

        addBudgetAdjustmentToServer(getCurrentUser(),new BudgetAdjustment("test",0,new Date(),5));
        getBudgetAdjustmentsfromServer(username,password);
        // getCurrentUser().addBudgetAdjustment(new BudgetAdjustment(
        //     "test", 0, testDate, 50));

    }

    function checkPlannedExpenses(value) {
        showPlanned = value;

        setBudgetAdjustments(showUnplanned, showPlanned, showPlanned)
    }



    function checkUnplannedExpenses(value) {
        showUnplanned = value;
        setBudgetAdjustments(showUnplanned, showPlanned, showPlanned)


    }
    return (
        <div className="CSideBar">
            <div>

                <SideBarInput display={Utils.formatMoney(getCurrentUser().getExpenses(currentMonth))} id={"Monthly expense"} label={"Expenses this month: "} style={{ display: 'block', margin: 'auto', backgroundColor: "#f6bb1d", fontWeight: 'bold' }} />
                <div style={{ display: 'inline-block' }}>

                    <SideBarInput id="My Goal is" label="Monthly budget is: " display={Utils.formatMoney(getCurrentUser().monthlyGoalPlusIncome())} style={{ backgroundColor: "#33826A", margin: '0 10px 0 0', fontWeight: 'bold' }} />

                    <SideBarInput id="You are" display={getCurrentUser().getOverUnder(currentMonth)} style={{ margin: '0 0px 0 0', fontWeight: 'bold' }} />
                </div>
            </div>
            <div className="my-calendars">
                <h3>My Calendars</h3>

                <Checkbox onChange={checkPlannedExpenses} textColor={"#06AADA"} text={"Planned Expenses"} intitalValue={showPlanned} />
                <Checkbox onChange={checkUnplannedExpenses} textColor={"#70C02F"} text={"Unplanned Expenses"} intitalValue={showUnplanned} />

                <button onClick={addExpense} className="login-button">Add Expense</button>
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

