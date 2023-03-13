import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";

import DefaultPage from "./DefaultPage";
import "./BalancePage.css"

import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { getCurrentUser } from "../Global";
import { BudgetAdjustment } from "../class/BudgetAdjustment";

export default function BalancePage() {


    const [date, setDate] = useState(new Date());

    var planned;
    var repeats;
    const addAdjustment = (event) => {
        event.preventDefault();

        const type = event.target.isPlanned.value;
        const budgetAdjustment = new BudgetAdjustment(event.target.name.value, type, date, 30);
        getCurrentUser().addBudgetAdjustment(budgetAdjustment);

    }
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
                        <h3>Create Balance Adjustment</h3 >

                        <label>Title:</label>
                        <form onSubmit={addAdjustment}>

                            <input id={"name"} type={"text"} />
                            <label>Date:</label>
                            <DatePicker selected={date}
                                onChange={(date) => setDate(date)} />
                            <label>Planned?</label>
                            <select id ="isPlanned" onChange={(isPlanned) => {
                                planned = isPlanned;
                            }}>
                                <option value={"0"}>planned</option>
                                <option value={"1"}>unplanned</option>
                            </select >
                            <label>Reoccurring:</label>

                            <select>
                                <option value={"never"}>never</option>
                                <option value={"monthly"}>monthly</option>
                                <option value={"weekly"}>weekly</option>
                            </select >

                            <input style={{ display: "block", margin: "auto" }
                            } type={"submit"}></input>
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