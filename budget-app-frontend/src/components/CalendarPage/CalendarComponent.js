
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import "./Calendar.css"
import * as utils from '../../utils/Utils.js';

//const testDate = new Date(2023, 1, 15);
function CalendarComponent({ setText, budgetAdjustments, activeDate, changeActiveDate }) {
    var budgetAdjustmentList;

    budgetAdjustmentList = budgetAdjustments;

    function cycleToNextMonth() {

        changeActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() + 1)));
    }
    function cycleToPrevMonth() {

        changeActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() - 1)));
    }
    function getTile({ activeStartDate, date, view }) {

        var returnValue;
        var adjustmentsForDay = [];
        budgetAdjustmentList.forEach(function (adjustment) {

            if (utils.isSameDay(date, adjustment.date)) {
                adjustmentsForDay.push(adjustment);
            }
        });

        returnValue = adjustmentsForDay.map(
            (budgetAdjustment) => {
                return (
                    <li onClick={() => {
                        setText("The amount for the adjustment " + budgetAdjustment.name + " is " + utils.formatMoney(budgetAdjustment.amount));
                    }} key={budgetAdjustment.name} className='budget-adjustment' style={{ backgroundColor: budgetAdjustment.color }}><p>{budgetAdjustment.name}</p></li >
                )
            }
        )
        return (<ul className='ba-list'>{returnValue}</ul>);
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

function CalendarCycler({ date, nextMonth, prevMonth }) {


    return (<div className='cycler'>

        <button className='cyclerButton' onClick={prevMonth}> {"<"} </button >
        <h1 style={{ display: 'inline-block' }}>{utils.getMonthName(date.getMonth()).toUpperCase() + " " + date.getFullYear()} </h1>
        <button className='cyclerButton' onClick={nextMonth}> {">"} </button >

    </div>);
}


export default CalendarComponent;



