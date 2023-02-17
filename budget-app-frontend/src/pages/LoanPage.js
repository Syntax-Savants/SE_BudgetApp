import "../componets/Navbar";
import Navbar from "../componets/Navbar";
import "./LoanPage.css";
import React, { useState } from 'react';


export default function LoanPage() {
    console.log(calculateMonthlyPayment(5000, 11.50, 36))
    const handleSubmit = (event) => {
        event.preventDefault();

        var monthlyPayment = calculateMonthlyPayment(event.target.amount.value, event.target.interest.value, event.target.term.value);
        console.log(monthlyPayment);
        setMonthlyPayment(monthlyPayment);



        // if vaild

        //change page to home

        // else display message incorrect username or password

        event.target.reset();
    };
    const [monthlyPayment, setMonthlyPayment] = useState(0);


    return (


        <div>
            <Navbar />
            <h2 className="loan-subheader">
                Welcome to your Personal Loan Estimator!

            </h2>

            <div style={{ width: "1000px",margin: "auto", marginTop: "15px" }}>
                <div className="loan-form">
                    <h3> Personal Loan Estimator </h3>
                    <form style={{ display: "block" }} onSubmit={handleSubmit}>

                        <label htmlFor="amount" step="0.01"> Insert Loan Amount:</label>

                        <input id="amount" type="number" step="0.01" />
                        <label htmlFor="term">Insert Loan Term in months:</label>

                        <input id="term" type="number" step="0.01" />
                        <label htmlFor="interest">Insert Interest Rate:</label>

                        <input id="interest" type="number" step="0.01" />

                        <input type={"submit"} />
                    </form>

                </div>

                <div className="loan-display">

                    <p style={{ fontSize: "25px", textAlign: "center" }}> Your monthly payment is...</p>
                    <div className="loan-display-text">

                        <p>${monthlyPayment}</p>

                    </div>
                </div>

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
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    interestRate /= 100;
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm;
    const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPayment = numerator / denominator;
    return formatter.format(monthlyPayment);

}