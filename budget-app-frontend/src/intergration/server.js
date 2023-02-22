export const Login = async (username, password) => {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:8080/user');



    request.setRequestHeader('auth', username + ":" + password); // Change these, leave the colon

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
    };

    request.send();

}