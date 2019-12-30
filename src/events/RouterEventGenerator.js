import { mainUI } from "../models/main";
import { login } from "../models/login";
import { lclStorage } from "../service/localStorage";
import { postUi } from "../models/post";
import { http } from "../service/http";
import { baseUrl } from "../app";

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

    generateNewPostEvent(e){
        mainUI.removeChildNodes();
        mainUI.loadMenu(lclStorage.getLoggedUser());
        postUi.generatePosts();
    }

    generateShowAllPostsEvent(e){
        mainUI.removeChildNodes();
        mainUI.loadMenu(lclStorage.getLoggedUser());
        http.get(baseUrl + "post").then((result)=>{
            postUi.generatePostPage(result);
        })
    }

    generateShowMyPostsEvent(e){
        mainUI.removeChildNodes();
        mainUI.loadMenu(lclStorage.getLoggedUser());
        http.get(baseUrl + `post?userId=${lclStorage.getLoggedUser().id}`).then((result)=>{
            postUi.generatePostPage(result);
        })
    }

    logout(e){
        localStorage.clear();
        mainUI.removeChildNodes();
        mainUI.loadMenu(null);
        login.loadLoginPage();
    }
}

export const RouterEvent = new RouterEventGenerator();