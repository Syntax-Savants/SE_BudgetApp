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

        return Number(incomeAmount);
    }

    getOverUnder(month) {

        let expenseAmount = this.getExpenses(month);

        if (expenseAmount > this.monthlyGoal)
            return "You are OVER your monthly budget goal for this month by $" + Math.abs(this.monthlyGoal - expenseAmount)
        else
            return "You will have $" + (this.monthlyGoal - expenseAmount) + " of savings at the end of this month.";
    }


    getBudgetAdjustments({ showUnplanned = true, showPlanned = true }) {
        if (showUnplanned && showPlanned)
            return this.budgetAdjustments;

        return this.budgetAdjustments.filter((budget) => {
            return (budget.type == 0 && showPlanned) || (budget.type == 1 && showUnplanned);
        })
    }
    monthlyGoalPlusIncome(month) {
        return (Number(this.monthlyGoal) + Number(this.getIncome(month)))
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