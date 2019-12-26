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

        if(user === null){
            const ul = document.createElement("ul")
            ul.id = "nav-mobile";
            ul.className = "right"

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