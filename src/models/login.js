import { factory } from "./genericComponent";
import { loginEventHandler } from "../events/loginEventGenerator";

class LoginUI{
    loadLoginPage(){
        const container = factory.generateContainer();

        const title = document.createElement("p");
        title.textContent = "Entry a User:";

        const form = document.createElement("form");
        
        const input = factory.generateInputText("loginInput","Username", "text");
        const password = factory.generateInputText("passwordInput", "Password", "password");
        
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

    loadRegisterPage(){
        const container = factory.generateContainer();
        const title = document.createElement("p");
        title.textContent = "Create a new User:"

        const username = factory.generateInputText("regLoginInput", "Username", "text");
        const password = factory.generateInputText("regPasswordInput", "Password", "password");
        const matchPassword = factory.generateInputText("regMatchInput", "Repeat Password", "password");
        const email = factory.generateInputText("regEmailInput", "Email", "text");
        const form = document.createElement("form");

        const button = factory.generateButton("btn waves-effect waves-light", "Submit", "submitLogin");
        const icon = document.createElement("i");
        icon.className = "material-icons right";
        icon.textContent = "send";

        button.appendChild(icon);
        button.addEventListener("click", loginEventHandler.sendRegister);

        form.appendChild(username);
        form.appendChild(password);
        form.appendChild(matchPassword);
        form.appendChild(email);
        form.appendChild(button);

        const card = factory.generateCard(title, form);
        card.classList.add("blue");
        card.classList.add("lighten-5")

        container.appendChild(card);
        document.body.appendChild(container);
    }
}

export const login = new LoginUI();