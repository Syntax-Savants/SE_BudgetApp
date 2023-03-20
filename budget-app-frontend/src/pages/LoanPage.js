import Navbar from "../components/Navbar";
import "./LoanPage.css";
import React, { useState } from 'react';
import * as Utils from '../utils/Utils';

export default function LoanPage() {
    const handleSubmit = (event) => {
        event.preventDefault();

        var monthlyPayment = calculateMonthlyPayment(event.target.amount.value, event.target.interest.value, event.target.term.value);
        console.log(monthlyPayment);
        setMonthlyPayment(monthlyPayment);

        event.target.reset();
    };
    const [monthlyPayment, setMonthlyPayment] = useState('$0');

    return (
        <div style={{ backgroundColor: "#33826a", height: '100vh' }}>
            <Navbar />
            <h2 className="loan-header">
                Personal Loan Estimator
                <hr />
            </h2>

            <div style={{}}>
                <div className="loan-form">
                    <form style={{ display: "block" }} onSubmit={handleSubmit}>
                        <div className="input-section">
                            <label htmlFor="amount" step="0.01"> Insert Loan Amount:</label>
                            <input id="amount" type="number" step="0.01" />
                        </div>

                        <div className="input-section">

                            <label htmlFor="term">Insert Loan Term in months:</label>
                            <input id="term" type="number" step="0.01" />
                        </div>
                        <div className="input-section">

                            <label htmlFor="interest">Insert Interest Rate:</label>
                            <input placeholder="" id="interest" type="number" step="0.01" />
                        </div>
                        <input className="loan-button" type={"submit"} value="View Rates" />
                        <input className="loan-button" type={"submit"} value="Help Me Decide" />

                    </form>
                    <p style={{ fontSize: '25px' }}>Your Monthly Payment is: {monthlyPayment} </p>
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
    return Utils.formatMoney(monthlyPayment);

}