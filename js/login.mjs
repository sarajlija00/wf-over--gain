

const loginDiv = document.getElementById('login-form');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');
const menu = document.getElementById('menu');


const setToken = response => localStorage.setItem ('token', response.token);
const getToken = response => localStorage.getItem ('token');
const clearToken = response => localStorage.removeItem('token');

const loginRequest = (email, password) => new Promise ((resolve, reject) => {
    let url = 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login';
    let xhttp = new XMLHttpRequest();
    let object = {
        email,
        password
    }
    let request = JSON.stringify(object);
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            resolve(response);
        }
        else(xhttp.readyState == 4 && xhttp.status !== 200) {
            reject('Pogresan mail ili password');
        }
    }
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(request);
})

const loggedIn = () => {
    const token = localStorage.getItem('token');
    return token;
}

const login = () => {
    const email = document.getElementById ('email').value;
    const password = document.getElementById ('password').value;
    loginRequest()
        .then(handleLogin)
        .catch(handleError)
   
}

const handleLogin = () => {
    setToken(response)
    showResult()
    showMenu()
}

const handleError = err => errorDiv.innerHTML = err;

const showResult = () => {
    loginDiv.style = 'display: none;';
    resultDiv.style = 'display: block;';
}

const showMenu = () => menu.style = 'display: block;';
const hideMenu = () => menu.style = 'display: none;';

export {
    loggedIn,
    login,
    showResult,
    showMenu,
    hideMenu,
    setToken,
    getItem,
    clearToken
}