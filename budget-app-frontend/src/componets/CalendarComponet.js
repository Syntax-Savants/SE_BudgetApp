
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import "./Calendar.css"
import * as utils from '../utils/CalenderHelper.js';

function CalendarComponet() {

    const [activeDate, changeActiveDate] = useState(new Date());

    function cycleToNextMonth() {

        changeActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() + 1)));
    }
    function cycleToPrevMonth() {

        changeActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() - 1)));
    }
    return (
        <div className="Sample">

            <button onClick={cycleToPrevMonth}> {"<"} </button >
            <button onClick={cycleToNextMonth}> {">"} </button >

            <h1>{utils.getMonthName(activeDate.getMonth()).toUpperCase() + " " + activeDate.getFullYear()} </h1>
            <div className="Sample__container">
                <main className="Sample__container__content">

                    <Calendar
                        activeStartDate={activeDate}
                        pnActiveStartDateChange={utils.tileClassName}
                        formatShortWeekday={(d, a) => utils.formatWeekday(d, a)}
                        tileClassName={utils.tileClassName}
                        showNavigation={false} />

                </main>
            </div>
        </div>


    );

} export default CalendarComponet;



