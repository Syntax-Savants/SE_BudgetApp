export function isSameDay(Date1, Date2) {

    return (Date1.getFullYear() === Date2.getFullYear() && Date1.getMonth() === Date2.getMonth() && Date1.getDate() === Date2.getDate());

}

export function formatWeekday(loc, day) {

    return (
        day.toLocaleDateString(loc, { weekday: 'long' })

    )
}

export function tileClassName({ activeStartDate, date, view }) {
    const value = activeStartDate;
    const today = new Date();


    // Add class to tiles in month view only
    if (view === 'month') {
        // Check if a date React-Calendar wants to check is on the list of dates to add class to
        if (date.getMonth() != value.getMonth() || date.getFullYear() != value.getFullYear()) {

            return 'tile last';
        }
        if (isSameDay(date, today))
            return 'tile today';
        else
            return 'tile';
    }
}

export function Day({ date, view }) {
    return (

        <div className='test' onMouseEnter={console.log(date.getDate())}> {view}</div>
    )
}

//convert month to string

export function getMonthName(month) {

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

export function formatMoney(num) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(num);

}

export function serializeDate(date) {

    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}



