// to hold user details

userDetails={
    "max":{uname:"max", password:'2020'},
    "manu":{uname:"manu", password:'2021'},
}

function saveDetails(){
    // permenently store data in local storage
    localStorage.setItem("database",JSON.stringify(userDetails))
}
//getDetals
function getDetails(){
    userDetails = JSON.parse(localStorage.getItem("database"))
}
function register(){
    let username = Runame.value
    let password = Rpswd.value
    getDetails()
    if(username in userDetails){
        alert('User already Exist. Please Login')
    }else{
        userDetails[username]={
            uname:username,
            password
        }
        console.log(userDetails);
        saveDetails()
        alert('Register Successfully')
        window.location='index.html'
    }
}

function login(){
    let username = uname.value
    let password = pswd.value
    getDetails()
    if(username in userDetails){
        if(password == userDetails[username].password){
            localStorage.setItem("username",username)
            alert('Login successfull')
            window.location = 'home.html'
        }
    }else{
        alert('Invalid Username / Password')
    }
}

var loginUser = localStorage.getItem("username")
user.innerHTML = loginUser

function logout(){
    localStorage.removeItem("username")
    window.location = 'index.html'
}

if(!localStorage.getItem("username")){
    alert('Please Login')
    window.location = 'index.html'
}

