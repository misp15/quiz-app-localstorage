const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginMessage = document.getElementById('loginMessage');

loginBtn.addEventListener('click', (e) => {
    const loginUser = new LogIn(username, password, loginMessage);
    loginUser.loginBtnAdmin(e);
});
