import { RouterEvent } from "../events/RouterEventGenerator";
import { factory } from "./genericComponent";

class MainUI{
    loadMenu(user){
        const navbar = document.createElement("nav");
        navbar.className = "blue darken-2";

        const div = document.createElement("div");
        div.classList.add("navbar-wrapper");

        const a = document.createElement("a");
        a.classList.add("brand-logo");
        a.textContent = "MicroPost Application"

        div.appendChild(a);

        const ul = document.createElement("ul");
        ul.id = "nav-mobile";
        ul.className = "right";

        if(user === null){
            const registerLink = document.createElement("a");
            registerLink.className = "registerLink";
            registerLink.textContent = "Register";
            registerLink.addEventListener("click", RouterEvent.generateRegisterEvent);

            let li = document.createElement("li");
            li.appendChild(registerLink)

            ul.appendChild(li)

            const loginLink = document.createElement("a");
            loginLink.className = "loginLink";
            loginLink.textContent = "Login";
            loginLink.addEventListener("click", RouterEvent.generateLoginEvent)

            li = document.createElement("li");
            li.appendChild(loginLink)

            ul.appendChild(li)
            div.appendChild(ul)
        } else {
            let li = document.createElement("li");
            const newPost = document.createElement("a");
            newPost.className = "postLink";
            newPost.textContent = "New Post";
            newPost.addEventListener("click", RouterEvent.generateNewPostEvent)
            li.appendChild(newPost);
            ul.appendChild(li);

            li = document.createElement("li");
            const showAllPosts = document.createElement("a");
            showAllPosts.className = "showAllLink";
            showAllPosts.textContent = "Show All Posts";
            showAllPosts.addEventListener("click", RouterEvent.generateShowAllPostsEvent)
            li.appendChild(showAllPosts);
            ul.appendChild(li);

            li = document.createElement("li");
            const showMyPosts = document.createElement("a");
            showMyPosts.className = "showMyLink";
            showMyPosts.textContent = "Show My Posts";
            showMyPosts.addEventListener("click", RouterEvent.generateShowMyPostsEvent)
            li.appendChild(showMyPosts);
            ul.appendChild(li);

            li = document.createElement("li");
            const logout = document.createElement("a");
            logout.className = "logout";
            logout.textContent = "Logout";
            logout.addEventListener("click", RouterEvent.logout);
            li.appendChild(logout);
            ul.appendChild(li);

            div.appendChild(ul);
        }

        navbar.appendChild(div);

        document.body.appendChild(navbar)
    }

    removeChildNodes(){
        while (document.body.childNodes.length > 0) {
            document.body.childNodes[0].remove() 
        }
    }

    
    showAlert(message, color){
        const position = document.querySelector(".card-content");
        const alert = factory.generateAlert(message, color)
        position.insertBefore(alert, position.firstChild);
        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);
    }
}

export const mainUI = new MainUI();