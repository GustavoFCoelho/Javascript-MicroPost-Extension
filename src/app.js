import { lclStorage } from "./service/localStorage";
import { mainUI } from "./models/main";
import { login } from "./models/login";

class App {
    static init() {
        
        const user = lclStorage.getLoggedUser();
        if(user === null){
            mainUI.loadMenu(user);
            login.loadLoginPage();
        } else {
            
        }
    }
}

export const baseUrl = "http://localhost:3000/"
App.init();
