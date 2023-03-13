import CalendarComponent from "../components/CalendarPage/CalendarComponent";
import CalendarPageSideBar from "../components/CalendarPage/CalendarPageSideBar";

import Navbar from "../components/Navbar";
import { getCurrentUser } from "../Global";

import React, { useState } from 'react';
function CalendarPage() {

    console.log("Welcome to Calendar page " + getCurrentUser().firstName);
    const [budgetAdjustments, setBudgetAdjustments] = useState(getCurrentUser().budgetAdjustments);
    console.log("test"  + budgetAdjustments);


    return (
        <div className="" style={{ height: '100%' }}>

            <Navbar logged={true} />
            <h2 className="loan-subheader">
                Welcome {getCurrentUser().firstName}!

            </h2>
            <div style={{ margin: 0, padding: 0 }}>
                <CalendarPageSideBar reload={setBudgetAdjustments} />

                <CalendarComponent budgetAdjustments={budgetAdjustments} />
            </div>
        </div>);
}



export default CalendarPage;