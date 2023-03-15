
import { User } from "./class/User";
import Cookies from 'universal-cookie';
import * as Server from "./intergration/server";

export var bypassServer = false;

var currentUser = null;

const cookies = new Cookies();

export function setCurrentUser(user) {
    currentUser = user;
}

export function getCurrentUser() {
    if (bypassServer) {

        return (new User("username", "password","test", "test"));
    }

    if (currentUser != null) {

        return currentUser;
    }

    console.log("Getting user from local storage");

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        currentUser = new User(foundUser.username, foundUser.password,foundUser.firstName, foundUser.lastName);

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