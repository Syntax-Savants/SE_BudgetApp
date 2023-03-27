import { BudgetAdjustment } from "./BudgetAdjustment"
import { addBudgetAdjustmentToServer } from "../intergration/server";
export class User {
    constructor(username, password, firstName, lastName, budgetAdjustments = []) {
        this.username = username;
        this.firstName = firstName;
        this.password = password;
        this.lastName = lastName;
        this.budgetAdjustments = budgetAdjustments;
        this.monthlyGoal = 1000;

    }

    getExpenses() {
        var expenseAmount = 0;

        this.budgetAdjustments.forEach((budget) => {
            expenseAmount += budget.amount;
        })

        return expenseAmount;
    }

    getOverUnder() {

        let expenseAmount = this.getExpenses();

        if (expenseAmount > this.monthlyGoal)
            return "You are OVER your monthly budget goal for this month."
        else
            return "You will have $" + (this.monthlyGoal - expenseAmount) + " of savings at the end of this month.";

    }


    removeBudgetAdjustmentByName(name) {


        for (let i = 0; i < this.budgetAdjustments.length; i++) {
            if (this.budgetAdjustments[i].name.toLowerCase().trim() == name.toLowerCase().trim()) {
                this.budgetAdjustments.splice(i, 1);
                this.save();
                return true;
            }

        }
        return false;
        //TODO: Remove from server as well
    }

    save() {
        localStorage.setItem('user', JSON.stringify(this));
    }
    addBudgetAdjustment(budgetAdjustment) {
        this.budgetAdjustments.push(budgetAdjustment);
        addBudgetAdjustmentToServer(this, budgetAdjustment);
        this.save();
    }


    BudgetAdjustmentList() {
        const listItems = this.budgetAdjustments.map((e) =>
            <li>{e.CalendarElement()}</li>
        );
        return <div> {listItems}</div>
    }


}