import { http } from "../service/http";
import { baseUrl } from "../app";
import { RouterEvent } from "./RouterEventGenerator";
import { mainUI } from "../models/main";
import { validation } from "../service/validation";
import { lclStorage } from "../service/localStorage";
import { postUi } from "../models/post";

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

        const data = {
            Username: document.querySelector("#regLoginInput").value,
            Password: document.querySelector("#regPasswordInput").value,
            Email: document.querySelector("#regEmailInput").value
        }

        const emailExp = new RegExp(/[A-Za-z0-9]{1,}@[A-Za-z]{1,}.[A-Za-z]{1,}/)

        if(data.Username == "" || data.Password == "" || data.Email == ""){
            mainUI.showAlert("Please fill all fields!", "red lighten-2");
            return;
        } else if(matchPassword == "" || data.Password != matchPassword){
            mainUI.showAlert("The passwords not match!", "red lighten-2");
            return;
        } else if(!emailExp.test(data.Email)){
            mainUI.showAlert("Please inform a valid email!", "red lighten-2");
            return;
        }

        http.post(baseUrl + "user", data)
        .then((result)=>{
            RouterEvent.generateLoginEvent();
        })  
    }

    loginEvent(e){
        e.preventDefault()
        let users = null;

        const data = {
            Username: document.querySelector("#loginInput").value,
            Password: document.querySelector("#passwordInput").value,
        }

        http.get(baseUrl+"user")
        .then((result)=>{
            users = result
            users.forEach(user => {
                if(user.Username === data.Username){
                    if(user.Password === data.Password){
                        mainUI.removeChildNodes();
                        lclStorage.setUser(data);
                        mainUI.loadMenu(data);
                        postUi.generatePosts(data);
                    } else {
                        mainUI.showAlert("Wrong Username or password", "red lighten-2");
                    }
                }
            });
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const loginEventHandler = new LoginEventHandler();