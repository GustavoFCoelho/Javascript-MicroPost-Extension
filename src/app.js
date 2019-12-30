import { lclStorage } from "./service/localStorage";
import { mainUI } from "./models/main";
import { login } from "./models/login";
import { postUi } from "./models/post";

class App {
    static init() {
        
        const user = lclStorage.getLoggedUser();
        if(user === null){
            mainUI.loadMenu(user);
            login.loadLoginPage();
        } else {
            mainUI.loadMenu(user);
            postUi.generatePosts()
        }

        
    }
}

export const baseUrl = "http://localhost:3000/"
App.init();

