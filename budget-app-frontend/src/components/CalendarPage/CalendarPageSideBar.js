import "./CalendarPageSideBar.css"
import Checkbox from "../ui/CheckBox";
import * as Utils from "../../utils/Utils"
import { getCurrentUser } from "../../Global"
import { useNavigate } from 'react-router-dom';

export default function CalendarPageSideBar({ currentMonth, setBudgetAdjustments, showPlanned, showUnplanned }) {
    const navigate = useNavigate();

    function addExpense() {
        navigate("/balance");
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
                <div style={{ display: 'block', marginBottom: '10px' }}>

                    <SideBarInput display={Utils.formatMoney(getCurrentUser().getExpenses(currentMonth))} id={"Monthly expense"} label={"Expenses this month: "} style={{ backgroundColor: "#33826A", margin: '0 10px 0 0', fontWeight: 'bold' }} />
                    <SideBarInput id="You are" label={"Target Balance For Today"} display={spendForToday(new Date())} style={{ margin: '0 0px 0 0', fontWeight: 'bold' }} />

                </div>

                <div style={{ display: 'inline-block' }}>

                    <SideBarInput id="My Goal is" label="Monthly budget is: " display={Utils.formatMoney(getCurrentUser().monthlyGoalPlusIncome(currentMonth))} style={{ backgroundColor: "#33826A", margin: '0 10px 0 0', fontWeight: 'bold' }} />

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



function spendForToday(date) {
    const lastDayOfMonth = Utils.lastDayOfMonth(date);
    const day = date.getDate();
    const startingBudget = getCurrentUser().balance;

    return Utils.formatMoney( (day / lastDayOfMonth) * getCurrentUser().monthlyGoal);

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

