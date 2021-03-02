class LogIn {
    #userName = "";
    #passWord = "";
    
    constructor(username, password, loginMessage) {
        this.#userName = username;
        this.#passWord = password;
        this.loginMessage = loginMessage;
    }
    loginBtnAdmin = (e) => {
       
        e.preventDefault();
        console.log(this.loginMessage);
        if(this.#userName.value === 'Milica' && this.#passWord.value === "Admin" )
        {
            localStorage.setItem('loggedIn', JSON.stringify(true));
            window.location.assign('../HTML/admin.html');
        } 
        else
        {
            this.loginMessage.innerText = "invalid" ;
            localStorage.setItem('loggedIn', JSON.stringify(false));
        }
        
    };
    logoutBtnAdmin = () => {
       localStorage.setItem('loggedIn', JSON.stringify(false));
       window.location.assign('../index.html');
    };
}

   