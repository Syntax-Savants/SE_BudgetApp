import { bypassServer, setCurrentUser } from '../Global.js';
import { User } from "../class/User";
import Cookies from 'universal-cookie';
import { serializeDate, deserializeDate } from '../utils/Utils.js';
import { BudgetAdjustment } from "../class/BudgetAdjustment"
import { json } from 'react-router-dom';
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

    var body = {
        'username': username,
        'first_name': firstName,
        'last_name': lastName,
        'password': password

    };

    request.send(JSON.stringify(body));
};

export const deleteAdjustmentFromServer = async (user, adjustment) => {
    var request = new XMLHttpRequest();

    request.open('DELETE', locate("balance"));

    request.setRequestHeader('user', user.username);
    request.setRequestHeader('description', adjustment.name);

    var body = {
        'user': user.username,
        'description': adjustment.name
    };

    request.send(JSON.stringify(body));
}

export const addBudgetAdjustmentToServer = async (user, adjustment) => {
    const username = user.username;
    const password = user.password;
    const date = serializeDate(adjustment.date);
    const value = adjustment.amount;
    const isPlanned = adjustment.type;
    const name = adjustment.name;
    var request = new XMLHttpRequest();

    request.open('POST', locate('balance'));

    request.setRequestHeader('Content-Type', 'application/json');


    var body = {
        'username': username,
        'password': password,
        'planned': isPlanned,
        'amt': value,
        'date': date,
        'description': name,
    };
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
            adjustment.id = this.responseText.id;

        }
    };

    request.send(JSON.stringify(body));
}



export const setUserBalance = async (username, value) => {

    var body = {
        "username": username,
        "balnce": value,
        "savings_goal": undefined
    }

    body = JSON.stringify(body);
    var response = await fetch(locate("user/balance"), {
        method: "put", headers: {
            'Content-Type': 'application/json'

        },
        body: body
    });

}


export const getBudgetAdjustmentsfromServer = async (username, password) => {
    var header = `${username}:${password}`;
    var adjustments = [];

    var response = await fetch(locate("balance"), {
        headers: {
            "auth":
                header
        }
    })
        .then(data => {

            if (data.status === 401) {
                return null;

            }
            return data.json();
        })
        .then(adjustmentRes => {

            adjustmentRes.forEach(a => {

                let b = new BudgetAdjustment(a.description, a.planned, deserializeDate(a.date), a.amt);
                adjustments.push(b);
            });
            return adjustments;

        }).catch(err => {

            return null
        });

    return adjustments;

    // console.log("Response: " + adjustments[0].name);
    // if (response == null) {
    //     return null;

    // }
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

    var budgetAdjustments = [];

    console.log(typeof (budgetAdjustments));
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

    budgetAdjustments = await getBudgetAdjustmentsfromServer(response.username, response.password);

    return new User(response.username, response.password, response.first_name, response.last_name, budgetAdjustments);


}

export function Logout() {
    console.log("logging out");

    cookies.set('LOGIN_HEADER', '', { path: '/' });
    localStorage.setItem('user', '');

}

function locate(mapping) {

    return SERVER_ADRESS + "/" + mapping;

}