import Navbar from "../components/Navbar";
import "./LoanPage.css";
import React, { useState } from 'react';
import * as Utils from '../utils/Utils';
import DecorCircle from "../components/CalendarPage/DecorCircle";
import { getCurrentUser } from "../Global"
import { Link } from "react-router-dom";

export default function LoanPage() {
    const handleSubmit = (event) => {
        event.preventDefault();

        var monthlyPayment = calculateMonthlyPayment(event.target.amount.value, event.target.interest.value, event.target.term.value);
        setMonthlyPayment(monthlyPayment);

        event.target.reset();
    };
    const [monthlyPayment, setMonthlyPayment] = useState('$0');

    return (
        <div style={{ backgroundColor: "#33826a", minHeight: '100vh' }}>
            <Navbar />
            <h2 className="loan-header">
                Personal Loan Estimator
                <hr />
            </h2>

            <div style={{ height: '100%' }}>
                <div className="loan-form">
                    <form style={{ display: "block" }} onSubmit={handleSubmit}>
                        <div className="input-section">
                            <label htmlFor="amount" step="0.01"> Insert Loan Amount:</label>
                            <input id="amount" type="number" step="0.01" />
                        </div>

                        <div className="input-section">

                            <label htmlFor="term">Insert Loan Term in Months:</label>
                           <span> <input id="term" type="number" step="0.01" /> </span>
                        </div>
                        <div className="input-section">

                            <label htmlFor="interest">Insert Annual Interest Rate:</label>
                            <input placeholder="" id="interest" type="number" step="0.01" />
                        </div>
                        <input className="loan-button" type={"submit"} value="View Rates" />
                        <Link className="loan-button" to = "/loan/help" value="Help Me Decide" >help me decide</Link>

                    </form>
                    <p style={{ fontSize: '25px' }}>{formatMonthlyPayment(monthlyPayment)} </p>
                    <p style={{ fontSize: '25px' }}>{fitsWithBudget(monthlyPayment)} </p>
                </div>

                <div className="loan-decor-container" >
                    <DecorCircle size={250} x={270} y={50} color={"#4CA7D5"} />

                    <DecorCircle size={400} x={70} y={150} color={"#F7D149"} /> {/* Yellow*/}
                    <DecorCircle size={200} x={0} y={400} color={"#6CB134"} />{/*Green*/}


                </div>
                {/*
                <div className="loan-display">
                    <p style={{ fontSize: "25px", textAlign: "center" }}> Your monthly payment is...</p>
                    <div className="loan-display-text">

                        <p>{monthlyPayment}</p>

                    </div>
                </div>
    */}
            </div>
        </div>
    )
}
/*

M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
M = monthly payment
P = loan amount
r = monthly interest rate (annual interest rate divided by 12)
n = number of monthly payments (term of the loan in months)
*/

function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {

    interestRate /= 100;
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm;
    const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPayment = numerator / denominator;

    if (isNaN(monthlyPayment) || monthlyPayment <= 0) {
        return "Invaild input";
    }
    return (monthlyPayment);

}
function formatMonthlyPayment(monthlyPayment){
    if(monthlyPayment >= 0)
        return "Your Monthly Payment is: " + Utils.formatMoney(monthlyPayment);
    else 
        return ""; 
}
function fitsWithBudget(monthlyPayment){
    //const monthlyPayment 
    //console.log("monthly payment is: " + monthlyPayment)
    var userBudgetBalance = Number(getCurrentUser().monthlyGoalMinusExpenses())
    console.log("userBudgetBalance is: " + userBudgetBalance) 
    console.log("monthly payment is: " + monthlyPayment ) //issue with subtraction is that formatted as money can't
    userBudgetBalance =  (userBudgetBalance - (monthlyPayment));
    console.log("userBudgetBalance after subtraction is: " + userBudgetBalance)

    if (userBudgetBalance >= 0)
        return "You will have " + Utils.formatMoney(userBudgetBalance) + " left in your monthly budget if you accept this loan.";
    else if (userBudgetBalance < 0)
        return "This loan is not reccomended as it would cause your monthly budget to become negative.";
    else
        return "";

}
