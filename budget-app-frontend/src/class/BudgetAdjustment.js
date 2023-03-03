const PLANNED_COLOR = 'rgb(6, 170, 218)';
const UNPLANNED_COLOR = '#52B302';
const OTHER_COLOR = '#33826A';


export class BudgetAdjustment {

    constructor(name, type, date, amount) {
        this.name = name;
        this.date = date;

        this.amount = amount;
        this.type = type;
        if (this.type == 0) {
            this.color = PLANNED_COLOR;

        } else if (this.type == 1) {
            this.color = UNPLANNED_COLOR;
        } else {
            this.color = OTHER_COLOR;

        }

    }

    CalendarElement =() => {
        return (<div className='budget-adjustment' style={{ backgroundColor: this.color }}><p>{this.name}</p></div >);

    }
}