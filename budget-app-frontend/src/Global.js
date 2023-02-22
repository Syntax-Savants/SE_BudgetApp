
import { User } from "./class/User";
export var ignoreServer = false;
var currentUser = null;

export function setCurrentUser(firstName, lastName, username) {
    currentUser = new User(username, firstName, lastName);

}

export function getCurrentUser() {
    return currentUser;

}