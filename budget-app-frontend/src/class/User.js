import { addBudgetAdjustmentToServer } from "../intergration/server";
import { BudgetAdjustment } from "./BudgetAdjustment";
export class User {
    constructor(username, password, firstName, lastName, budgetAdjustments = [new BudgetAdjustment("Planned", 0, new Date(2023, 2, 29), 1000), new BudgetAdjustment("unplanned", 1, new Date(2023, 2, 29), 1000)]) {
        this.username = username;
        this.firstName = firstName;
        this.password = password;
        this.lastName = lastName;
        this.budgetAdjustments = budgetAdjustments;
        this.monthlyGoal = 1000;
    }

    getExpenses(month = new Date().getMonth()) {
        var expenseAmount = 0;

        this.budgetAdjustments.forEach((budget) => {

            if (month === budget.date.getMonth() && !budget.isIncome)
                expenseAmount += budget.amount;
        })

        return expenseAmount;
    }

    getIncome(month) {
        var incomeAmount = 0;

        this.budgetAdjustments.forEach((budget) => {

            if (month === budget.date.getMonth() && budget.isIncome)
                incomeAmount = -budget.amount;
        })

        return incomeAmount;
    }

    getOverUnder(month) {

        let expenseAmount = this.getExpenses(month);

        if (expenseAmount > this.monthlyGoal)
            return "You are OVER your monthly budget goal for this month by $" + Math.abs(this.monthlyGoal - expenseAmount)
        else
            return "You will have $" + (this.monthlyGoal - expenseAmount) + " of savings at the end of this month.";
    }


    getBudgetAdjustments({ showUnplanned = true, showPlanned = true }) {
        console.log("Show Planned: " + showPlanned, "Show Unplanned: " + showUnplanned);
        if (showUnplanned && showPlanned)
            return this.budgetAdjustments;

        return this.budgetAdjustments.filter((budget) => {
            return (budget.type == 0 && showPlanned) || (budget.type == 1 && showUnplanned);
        })
    }
    monthlyGoalPlusIncome(month) {
        return (this.monthlyGoal + this.getIncome(month))
    }
    monthlyGoalMinusExpenses() {
        return (this.monthlyGoal - this.getExpenses());
    }

    removeBudgetAdjustmentByName(name) {


        for (let i = 0; i < this.budgetAdjustments.length; i++) {
            if (this.budgetAdjustments[i].name.toLowerCase().trim() === name.toLowerCase().trim()) {
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





}