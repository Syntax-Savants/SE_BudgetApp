import { BudgetAdjustment } from "./BudgetAdjustment"
import { addBudgetAdjustmentToServer } from "../intergration/server";
export class User {
    constructor(username, password, firstName, lastName) {
        this.username = username;
        this.firstName = firstName;
        this.password = password;
        this.lastName = lastName;
        this.budgetAdjustments = [new BudgetAdjustment("rent", 2, new Date(2023, 2, 15), 50)];

    }

    removeBudgetAdjustmentByName(name) {


        for (let i = 0; i < this.budgetAdjustments.length; i++) {
            if (this.budgetAdjustments[i].name.toLowerCase().trim() == name.toLowerCase().trim()) {
                this.budgetAdjustments.splice(i, 1);
            }

        }
        //TODO: Remove from server as well
    }
    addBudgetAdjustment(budgetAdjustment) {
        this.budgetAdjustments.push(budgetAdjustment);
        addBudgetAdjustmentToServer(this, budgetAdjustment);
    }

    BudgetAdjustmentList() {
        const listItems = this.budgetAdjustments.map((e) =>
            <li>{e.CalendarElement()}</li>
        );
        return <div> {listItems}</div>
    }


}