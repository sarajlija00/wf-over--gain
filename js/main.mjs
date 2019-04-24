import {loggedIn, login, showResult,  showMenu, hideMenu, setToken, getItem, clearToken} from './login.mjs';

if(loggedIn()) {
    showResult()
    showMenu()
    
}
else {
    showLogin();
    hideMenu();
}



  
window.login = login;
window.logout = logout;

