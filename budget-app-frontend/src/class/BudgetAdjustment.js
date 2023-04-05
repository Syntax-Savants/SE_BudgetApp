const PLANNED_COLOR = 'rgb(6, 170, 218)';
const UNPLANNED_COLOR = '#52B302';
//const OTHER_COLOR = '#33826A';


export class BudgetAdjustment {

    constructor(name, type, date, amount) {
        this.name = name;
        this.date = date;
        date = new Date().getMonth()
        this.amount = amount;
        this.type = type;
        if (this.type == 0) {
            this.color = PLANNED_COLOR;

        } else {
            this.color = UNPLANNED_COLOR;
        }

        this.isIncome = amount < 0;
    }


}