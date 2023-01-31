
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import "./Calendar.css"

function CalendarComponet() {

    const [currentDate, changeDate] = useState(new Date());

    function getNextDate() {

        changeDate(new Date(currentDate.setMonth(currentDate.getMonth() +1)));
    }
    function getPrevDate() {

        changeDate(new Date(currentDate.setMonth(currentDate.getMonth() -1)));
    }
    return (
        <div className="Sample">

            <button onClick={getPrevDate}> {"<"} </button >
            <button onClick={getNextDate}> {">"} </button >

            <h1>{getMonthName(currentDate.getMonth()).toUpperCase()}</h1>
            <div className="Sample__container">
                <main className="Sample__container__content">

                    <Calendar activeStartDate={currentDate} onActiveStartDateChange={tileClassName} formatShortWeekday={(d, a) => formatWeekday(d, a)} formatWeekday={(d, a) => formatWeekday(d, a)} tileClassName={tileClassName} showNavigation={false} />

                </main>
            </div>
        </div>


    );

} export default CalendarComponet;


function formatWeekday(loc, day) {

    return (
        day.toLocaleDateString(loc, { weekday: 'long' })

    )
}
function tileClassName({ date, view }) {
    const value = new Date();

    // Add class to tiles in month view only
    if (view === 'month') {
        // Check if a date React-Calendar wants to check is on the list of dates to add class to
        if (date.getMonth() != value.getMonth()) {
            return 'tile last';
        }
        if (value.getDate() == date.getDate() && value.getMonth() == date.getMonth() && value.getFullYear)
            return 'tile today';
        else
            return 'tile';
    }
}

function Day({ date, view }) {
    return (

        <div className='test' onMouseEnter={console.log(date.getDate())}> {view}</div>
    )
}
//convert month to string

function getMonthName(month) {

    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
            ;
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";

        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return "Invalid Month";
    }
}