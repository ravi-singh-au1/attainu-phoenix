const giveValue = () => {

    var userName = document.getElementById("userName").value;
   var password = document.getElementById("password").value;

    var values = {
        userName: userName,
        password: password
    }
    return values;
}

const validate = (userName, password) => {

    if (userName == "" || password == "") {
        return false;
    }
    return true;
}

const login = () => {
    event.preventDefault();

    var userName = giveValue().userName;
    var password = giveValue().password;

    if (validate(userName, password)) {
        if (userName == "ravi" && password == "1234") {
           
            alert("success")
        }
        else {
            
            alert("error")
        }
    }
    else {
        alert("Please Enter UserName and Password.")
    }

}

document.getElementById("login").addEventListener("click", login);
