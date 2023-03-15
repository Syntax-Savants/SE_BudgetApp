import { bypassServer, setCurrentUser } from '../Global.js';
import { User } from "../class/User";
import Cookies from 'universal-cookie';
import { serializeDate } from '../utils/Utils.js';
const SERVER_ADRESS = "http://localhost:8080";
const cookies = new Cookies();

export const Ping = async () => {

    let ableToConnect = await fetch(locate('health')).then(d => {

        return true
    }).catch(err => { return false });

    console.log("Server Connection == " + ableToConnect);

    return ableToConnect;
}


export const SignUp = async (username, password, firstName, lastName) => {
    console.log("Attempting to sign up user  " + username);


    if (bypassServer) {

        return;
    }
    var request = new XMLHttpRequest();

    request.open('POST', locate("user"));

    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
    };

    var body = {
        'username': username,
        'first_name': firstName,
        'last_name': lastName,
        'password': password

    };

    request.send(JSON.stringify(body));
};

export const addAdjustment = async (user, adjustment) => {
    const username = user.username;
    const password = user.password;
    const date = serializeDate(adjustment.date);
    const value = adjustment.amount;
    const isPlanned = adjustment.type = 0 ? true : false;
    var request = new XMLHttpRequest();


    // request.open('GET', 'https://private-anon-c9009c6527-syntaxsavants.apiary-mock.com/balance');

    // request.setRequestHeader('Content-Type', 'application/json');

    // request.onreadystatechange = function () {
    //     if (this.readyState === 4) {
    //         console.log('Status:', this.status);
    //         console.log('Headers:', this.getAllResponseHeaders());
    //         console.log('Body:', this.responseText);
    //     }s
    // };

    // var body = {
    //     'creds': {
    //         'username': username,
    //         'password': password
    //     },
    //     'startDate': '',
    //     'endDate': '',
    //     'adjustments': [
    //         {
    //             'planned': isPlanned,
    //             'value': value,
    //             'date': date
    //         }
    //     ]
    // };

    // request.send(JSON.stringify(body));

}


export const Login = async (username, password) => {
    if (bypassServer) {

        return true;
    }

    var header = `${username}:${password}`;
    var response = await getUserFromHeader(header);

    console.log("User from header: " + response);


    //        setCurrentUser(response.username, response.first_name,response.last_name);

    //If Login Is Not Successful
    if (response == null)
        return false;

    cookies.set('LOGIN_HEADER', header, { path: '/' });
    console.log("Saved " + cookies.get('LOGIN_HEADER') + " to cookies");

    localStorage.setItem('user', JSON.stringify(response));

    setCurrentUser(response);

    return true;
}


export async function getUserFromHeader(header) {
    var response = await fetch(locate("user"), {
        headers: {
            "auth":
                header
        }
    })
        .then(data => {

            if (data.status === 401) {
                console.log("User does not exist");

                return null;

            }
            return data.json();
        })
        .then(user => {

            return user;

        }).catch(err => {

            return null
        });
    if (response == null) {
        return null;

    }

    return new User(response.username, response.first_name, response.last_name);


}

export function Logout() {
    console.log("logging out");

    cookies.set('LOGIN_HEADER', '', { path: '/' });
    localStorage.setItem('user', '');

}




function locate(mapping) {

    return SERVER_ADRESS + "/" + mapping;

}