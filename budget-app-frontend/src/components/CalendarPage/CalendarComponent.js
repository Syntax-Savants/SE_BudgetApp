
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import "./Calendar.css"
import * as utils from '../../utils/Utils.js';
import * as Global from "../../Global"

const testDate = new Date(2023, 1, 15);
var budgetAdjustmentList;
function CalendarComponent({ budgetAdjustments }) {

    const [activeDate, changeActiveDate] = useState(new Date());
    budgetAdjustmentList = budgetAdjustments;

    console.log("reload");
    function cycleToNextMonth() {

        changeActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() + 1)));
    }
    function cycleToPrevMonth() {

        changeActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() - 1)));
    }
    return (
        <div className="Sample">
            <div className="Sample__container">
                <main className="Sample__container__content">
                    <CalendarCycler date={activeDate} nextMonth={cycleToNextMonth} prevMonth={cycleToPrevMonth} />
                    <Calendar
                        activeStartDate={activeDate}
                        tileContent={getTile}
                        formatShortWeekday={(d, a) => utils.formatWeekday(d, a)}
                        tileClassName={utils.tileClassName}
                        showNavigation={false} />
                </main>
            </div>
        </div>
    );
}

function getTile({ activeStartDate, date, view }) {

    var returnValue;
    budgetAdjustmentList.forEach(function (adjustment) {

        if (utils.isSameDay(date, adjustment.date)) {
            console.log(adjustment.date);

            returnValue = adjustment.CalendarElement();
        }
    });

    return returnValue;
}


function CalendarCycler({ date, nextMonth, prevMonth }) {


    return (<div className='cycler'>

        <button className='cyclerButton' onClick={prevMonth}> {"<"} </button >

        <h1 style={{ display: 'inline-block' }}>{utils.getMonthName(date.getMonth()).toUpperCase() + " " + date.getFullYear()} </h1>
        <button className='cyclerButton' onClick={nextMonth}> {">"} </button >

    </div>);
}


export default CalendarComponent;



