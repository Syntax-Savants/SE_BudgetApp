
import { User } from "./class/User";
import Cookies from 'universal-cookie';
import * as Server from "./intergration/server";
import { BudgetAdjustment } from "./class/BudgetAdjustment";
import { deserializeDate } from "./utils/Utils";

export var bypassServer = false;

var currentUser = null;

const cookies = new Cookies();

export function setCurrentUser(user) {
    currentUser = user;
}

export function getCurrentUser() {

    if (currentUser != null) {

        return currentUser;
    } if (bypassServer) {

        currentUser = (new User("username", "password", "test", "test"));
        return currentUser;
    }


    console.log("Getting user from local storage");

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);

        var adjustments = [];
        foundUser.budgetAdjustments.forEach(a => {
            adjustments.push(new BudgetAdjustment(a.name, a.type, deserializeDate(a.date), a.amount));
        });
        currentUser = new User(foundUser.username, foundUser.password, foundUser.firstName, foundUser.lastName, adjustments);

        return currentUser;
    }

    console.log("Getting user from cookies");

    Server.getUserFromHeader(cookies.get('LOGIN_HEADER')).then(user => {
        console.log(user);
        setCurrentUser(user);

        return user;
    });


    return currentUser;
}