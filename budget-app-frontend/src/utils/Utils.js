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
    //2023-04-16

    const year = date.getFullYear();
    const month = date.getMonth() + 1 >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    const day = date.getDate() >= 10 ? (date.getDate()) : '0' + (date.getDate());
    return year + '-' + month + '-' + day;
    // return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}


export function deserializeDate(dateAndTime) {
    const date = dateAndTime.split("T")[0];
    const day = date.split("-")[2];
    const year = date.split("-")[0];
    const month = date.split("-")[1];

    return new Date(year, Number(month) - 1, day);
}
export function dayRemainingInMonth(date) {

    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return lastDayOfMonth - date.getDate();
}

