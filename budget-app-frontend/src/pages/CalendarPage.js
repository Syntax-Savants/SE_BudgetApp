import CalendarComponent from "../components/CalendarPage/CalendarComponent";
import CalendarPageSideBar from "../components/CalendarPage/CalendarPageSideBar";

import Navbar from "../components/Navbar";
import { getCurrentUser } from "../Global";

import React, { useState } from 'react';
function CalendarPage() {

    const [activeDate, changeActiveDate] = useState(new Date());
    const [showPlanned, setShowPlanned] = useState(true);
    const [showUnplanned, setShowUnplanned] = useState(true);
    const [subHeaderText, setSubHeaderText] = useState(`Welcome ${getCurrentUser().firstName}!`);

    var budgetAdjustments = getCurrentUser().getBudgetAdjustments({ showPlanned: showPlanned, showUnplanned: showUnplanned })
    function setPlannedUnplanned(p, u) {
        setShowPlanned(p);
        setShowUnplanned(u);
    }
    return (
        <div className="" style={{ height: '100%' }}>

            <Navbar logged={true} />
            <h2 className="loan-subheader">
                {subHeaderText}
            </h2>
            <div style={{ margin: 0, padding: 0 }}>
                <CalendarPageSideBar currentMonth={activeDate.getMonth()} setBudgetAdjustments={setPlannedUnplanned} showPlanned={showPlanned} showUnplanned={showUnplanned} />

                <CalendarComponent setText={(text) => { setSubHeaderText(text) }} budgetAdjustments={budgetAdjustments} activeDate={activeDate} changeActiveDate={changeActiveDate} />
            </div>
        </div>);
}

export default CalendarPage;