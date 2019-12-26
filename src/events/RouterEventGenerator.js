import { mainUI } from "../models/main";
import { login } from "../models/login";
import { lclStorage } from "../service/localStorage";

class RouterEventGenerator{

    generateRegisterEvent(e){
        mainUI.removeChildNodes();
        mainUI.loadMenu(null);
        login.loadRegisterPage();
    }

    generateLoginEvent(e){
        mainUI.removeChildNodes();
        mainUI.loadMenu(null);
        login.loadLoginPage();
    }

}

export const RouterEvent = new RouterEventGenerator();