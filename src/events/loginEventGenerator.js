import { http } from "../service/http";
import { baseUrl } from "../app";
import { RouterEvent } from "./RouterEventGenerator";

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

    sendRegister(e){
        e.preventDefault();
        const matchPassword = document.querySelector('#regMatchInput').value;

        if(matchPassword == ""){
            showAlert("The passwords not match!");
            return;
        }

        const data = {
            Username: document.querySelector("#regLoginInput").value,
            Password: document.querySelector("#regPasswordInput").value,
            Email: document.querySelector("#regEmailInput").value
        }

        http.post(baseUrl + "user", data)
        .then((result)=>{
            RouterEvent.generateLoginEvent();
        })  
    }
}

export const loginEventHandler = new LoginEventHandler();