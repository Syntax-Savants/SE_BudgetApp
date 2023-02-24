
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import "./Calendar.css"
import * as utils from '../../utils/Utils.js';

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


            <div className="Sample__container">
                <main className="Sample__container__content">
                    <CalendarCycler date={activeDate} nextMonth={cycleToNextMonth} prevMonth={cycleToPrevMonth} />
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

}

function CalendarCycler({ date, nextMonth, prevMonth }) {


    return (<div className='cycler'>

        <button className='cyclerButton' onClick={prevMonth}> {"<"} </button >

        <h1 style={{ display: 'inline-block' }}>{utils.getMonthName(date.getMonth()).toUpperCase() + " " + date.getFullYear()} </h1>
        <button className='cyclerButton' onClick={nextMonth}> {">"} </button >

    </div>);
}


export default CalendarComponet;



