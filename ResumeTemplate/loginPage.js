

// Function to restrict user in the resume page from coming back to login page
window.history.forward();
function noback() {
    window.history.forward();
}

let form = document.getElementById('form');
let users = [];// stores all user login credentials
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let user = {
        username: username,
        password: password
    }
    // Scenario 1 - first element in localStorage
    if (users.length == 0) {
        localStorage.setItem('user', JSON.stringify(user))
        users.push(user)
        alert("Your details are stored in local Storage");
        window.location = 'resumePage.html'
        return;
    }
    else {
        // Scenario 2- Check if same user login credentials are present
        // parse to JSON Object and store in an array(usersArray)
        let usersArray = JSON.parse(localStorage.getItem(users)) || []
        for (var i = 0; i < usersArray.length; i++) {
            if (usersArray[i].username === user.username) {
                if (usersArray[i].password === user.password) {
                    alert("Login Successful");
                    window.location = 'resumePage.html';
                    return;
                }
                else {
                    // same user but different password
                    alert("Invalid Login Credentials");
                    return;
                }
            }
        }
        // Scenario 3 - new user
        localStorage.setItem('user', JSON.stringify(user));
        users.push(user);
        alert("Your details are stored in local Storage");
        window.location = 'resumePage.html';
        return;
    }
}
)
