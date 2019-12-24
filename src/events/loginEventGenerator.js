class LoginEventHandler{
    showPassword(e){
        if(e.target.checked){
            const password = document.querySelector("#passwordInput");
            password.setAttribute("type", "text");
        } else {
            const password = document.querySelector("#passwordInput");
            password.setAttribute("type", "password");
        }
    }
}

export const loginEventHandler = new LoginEventHandler();