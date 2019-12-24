import { factory } from "./genericComponent";
import { loginEventHandler } from "../events/loginEventGenerator";

class LoginUI{
    loadLoginPage(){
        const container = factory.generateContainer();

        const title = document.createElement("p");
        title.textContent = "Entry a User:";

        const form = document.createElement("form");
        
        const input = factory.generateInputText("loginInput","Username", null, "text");
        const password = factory.generateInputText("passwordInput", "Password", null, "password");
        
        let div = factory.generateDivRow();
        div.appendChild(input);

        form.appendChild(div);

        div = factory.generateDivRow();
        div.appendChild(password)
        
        form.appendChild(div);
        
        let span = document.createElement("span");

        const button = factory.generateButton("btn waves-effect waves-light", "Submit", "submitLogin");
        const icon = document.createElement("i");
        icon.className = "material-icons right";
        icon.textContent = "send"

        const checkbox = factory.generateCheckBox("Show Password", loginEventHandler.showPassword);
        span.appendChild(checkbox);

        button.appendChild(icon)
        button.classList.add("right")
        span.appendChild(button)

        form.appendChild(span)

        const card = factory.generateCard(title, form);
        card.classList.add("blue");
        card.classList.add("lighten-5")

        container.appendChild(card);
        document.body.appendChild(container);
    }
}

export const login = new LoginUI();