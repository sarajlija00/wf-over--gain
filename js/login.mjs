const loginDiv = document.getElementById('login-forma');
const rezultatDiv = document.getElementById('rezultat');
const greskaDiv = document.getElementById('greska');

const login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loginRequest(email, password)
    .then(spasiTokenSakriFormu)
    .catch(prikaziGresku)

}

const loginRequest = (email, password) => new Promise ((resolve, reject) => {
    let url = 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login';
    let xhttp = new XMLHttpRequest();
    let object = {email, password}
    let request = JSON.stringify(object);
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            resolve(response);
        }
        else{
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

const prikaziGresku = err => greskaDiv.innerHTML = err;

const spasiTokenSakriFormu = response => {
    localStorage.setItem ('token', response.token);
    loginDiv.style = 'display: none';
}

export {
    login,
    loggedIn,

}


