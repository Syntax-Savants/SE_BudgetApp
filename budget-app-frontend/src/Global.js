
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

        return (new User("username", "test", "test", "test"));
    }

    if (currentUser != null) {

        return currentUser;
    }


    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        return foundUser;
    }

    Server.getUserFromHeader(cookies.get('LOGIN_HEADER')).then(user => {
        console.log(user);
        setCurrentUser(user);

        return user;
    });


    return currentUser;
}