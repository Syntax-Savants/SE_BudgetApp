
import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";
import Checkbox from "../components/ui/CheckBox";
import DefaultPage from "./DefaultPage";
import scale from "../img/scale.png";
import money from "../img/money.png";
import x from "../img/x.png";

import "./BalancePage.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { getCurrentUser } from "../Global";
import { BudgetAdjustment } from "../class/BudgetAdjustment";
import { useNavigate } from 'react-router-dom';

export default function BalancePage() {


    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const addAdjustment = (event) => {
        event.preventDefault();

        const type = event.target.isPlanned.value;
        const incomeOrExpense = event.target.expenseOrIncome.value;
        const amount = event.target.amt.value;
        const budgetAdjustment = new BudgetAdjustment(event.target.name.value, type, date, incomeOrExpense * amount);
        getCurrentUser().addBudgetAdjustment(budgetAdjustment);

        navigate("/home");
    }

    const removeAdjustment = (event) => {
        event.preventDefault();
        if (getCurrentUser().removeBudgetAdjustmentByName(event.target.removeText.value))
            navigate("/home");

    }
    const changeGoal = (event) => {
        event.preventDefault();
        getCurrentUser().monthlyGoal = event.target.goal.value;
        navigate("/home");
    }
    return (
        <div>
            <Navbar />
            <div className="loan-subheader">
                <h2>
                    Welcome to Your Balance Adjustment
                </h2>
            </div>

            <div className="subTitle">
                <h3>
                    Update, add, remove. We got you covered
                </h3>
                <hr></hr>
            </div>

            <div className="balance-page-section">

                <div className="picTitle">
                    <div>
                        <form>
                            <div className="circleOne"><img src={scale} alt="scale" /></div>
                            <br></br>
                            <h3>Your Balance</h3>
                        </form>
                    </div>
                </div>



                <div className="picTitle">
                    <div>
                        <form>
                            <div className="circleTwo"><img src={money} alt="money" /></div>
                            <br></br>
                            <h3>Add Your Adjustment</h3>
                        </form>
                    </div>
                </div>



                <div className="picTitle">
                    <div>
                        <form>
                            <div className="circleThree"><img src={x} alt="x" /></div>
                            <h3>Remove an Existing <br></br>Expense or Income</h3>
                        </form>
                    </div>
                </div>

            </div>
            <hr></hr>

            <div className="balance-page-section">
                <div className="balance-page-input">
                    <div>
                        <form style={{ display: "block" }} onSubmit={changeGoal}>
                            <label>Input Your Initial Balance:</label>
                            <label>Your initial balance should</label>
                            <label>indicate your starting balance.</label>
                            <br></br>
                            <input placeholder={"$" + getCurrentUser().monthlyGoal} id='goal' type={"text"} />
                            <input type={"Submit"} defaultValue="Enter" className="enterBalance" />
                        </form>
                    </div>
                </div >

                <div className="balance-page-input">
                    <div >
                        <form style={{ display: "block" }} onSubmit={addAdjustment}>
                            <label>Give Us More Information About </label>
                            <label>Your Expense. </label>


                            <label>Title:</label>
                            <input placeholder="Rent, School etc..." id="name" type={"text"} />
                            <label>Amount:</label>
                            <input placeholder="ex. 1000" id="amt" type={"number"} />
                            <label>Date:</label>
                            <DatePicker selected={date}
                                onChange={(date) => setDate(date)} />
                            <label>Reoccurring?</label>
                            <input type={"text"} />


                            <select id="isPlanned">
                                <option value={"0"}>Planned</option>
                                <option value={"1"}>Unplanned</option>
                            </select >

                            <select id="expenseOrIncome">
                                <option value={"1"}>Expense</option>
                                <option value={"-1"}>Income</option>
                            </select >
                            <button className="enterBalance">Add Expense</button>
                        </form>
                    </div>
                </div >

                <div className="balance-page-input">
                    <div>
                        <form style={{ display: "block" }} onSubmit={removeAdjustment}>
                            <label>Need to Remove an Existing</label>
                            <label>Expense or Balance? No</label>
                            <label>Problem!</label>
                            <br></br>
                            <label>Title:</label>
                            <input id="removeText" type={"text"} />
                            <button className="enterBalance">Remove Expense</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );


}
