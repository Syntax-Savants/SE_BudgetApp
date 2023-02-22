


export const Login = async (username, password) => {


    var response = await fetch('http://localhost:8080/user', {
        headers: {
            "auth":
                `${username}:${password}`


        }
    })
        .then(data => {

            if (data.status === 401) {
                console.log("User does not exist");

                return null;

            }
            return data.json();


        })
        .then(post => {
            console.log(post);
            return post;


        }).catch(err => {

            return null
        });


    if (response == null) {
        return false;
    }
    return true;
}