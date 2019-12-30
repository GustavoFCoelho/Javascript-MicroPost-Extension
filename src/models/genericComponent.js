class GenericComponentFactory{
    generateCard(title, body){
        const card = document.createElement("div");
        card.className = "card";

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const cardTitle = document.createElement("div");
        cardTitle.className = "card-title center"
        cardTitle.appendChild(title);
        
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(body);

        card.appendChild(cardTitle);
        card.appendChild(cardContent);
        return card;
    }

    generateContainer(){
        const container = document.createElement("div");
        container.className = "container";
        return container;
    }

    generateInputText(id, labelText, type){
        const formInput = document.createElement("div");
        formInput.className = "input-field";

        const lab = document.createElement("label");
        lab.setAttribute("for", id)
        lab.textContent = labelText;

        const input = document.createElement("input");
        input.setAttribute("type",type);
        input.setAttribute("id", id);

        formInput.appendChild(input);
        formInput.appendChild(lab);
        return formInput
    }

    generateDivRow(){
        const div = document.createElement("div");
        div.className = "row";
        return div;
    }
    
    generateButton(className, text, id){
        const button = document.createElement("button");
        button.setAttribute("id", id);
        button.textContent = text;
        button.className = className;
        return button;
    }

    generateCheckBox(text, hasEventListener){
        const label = document.createElement("label");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.className = "filled-in";
        
        if(hasEventListener !== null){
            checkbox.addEventListener("change", hasEventListener);
        }

        const span = document.createElement("span");
        span.textContent = text;

        label.appendChild(checkbox);
        label.appendChild(span);
        return label;
    }

    generateAlert(message, color){
        const alert = document.createElement("span");
        alert.className = color +" alert";
        alert.appendChild(document.createTextNode(message));
        return alert;
    }

    generateTextArea(id, labelText){
        const formInput = document.createElement("div");
        formInput.className = "input-field";

        const lab = document.createElement("label");
        lab.setAttribute("for", id)
        lab.textContent = labelText;

        const input = document.createElement("textarea");
        input.setAttribute("id", id);
        input.className = "materialize-textarea"

        formInput.appendChild(input);
        formInput.appendChild(lab);
        return formInput
    }
}

export const factory = new GenericComponentFactory();
