import { BudgetAdjustment } from "./BudgetAdjustment"

export class User {
    constructor(username, firstName, lastName) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.budgetAdjustments = [new BudgetAdjustment("rent", 2, new Date(2023, 2, 15), 50)];


    }
    addBudgetAdjustment(budgetAdjustment) {
        this.budgetAdjustments.push(budgetAdjustment);

    }

    BudgetAdjustmentList() {
        const listItems = this.budgetAdjustments.map((e) =>
            <li>{e.CalendarElement()}</li>
        );
        return <div> {listItems}</div>
    }


}