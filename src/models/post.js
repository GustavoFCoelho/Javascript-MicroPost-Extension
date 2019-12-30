import { factory } from "./genericComponent"
import { postEventHandler } from "../events/PostEventGenerator";
import { http } from "../service/http";
import { baseUrl } from "../app";

class PostUi {
    generatePosts() {
        const container = factory.generateContainer();
        const row = factory.generateDivRow();

        const col = document.createElement("div");
        col.className = "col s8";

        const title = document.createElement("p");
        title.textContent = "Create a new Post";

        const titleInput = factory.generateInputText("titleInput", "Post title", "text");
        const textInput = factory.generateTextArea("postBodyInput", "Post body");

        const form = document.createElement("form");
        form.appendChild(titleInput);
        form.appendChild(textInput);

        const button = factory.generateButton("btn waves-effect waves-light", "Submit", "submitLogin");
        const icon = document.createElement("i");
        icon.className = "material-icons right";
        icon.textContent = "send";
        button.appendChild(icon);
        button.addEventListener("click", postEventHandler.newPost)

        form.appendChild(button);

        const cardPostForm = factory.generateCard(title, form);

        const titleCateg = document.createElement("p");
        titleCateg.textContent = "Post Categories";

        http.get(baseUrl + "category")
            .then((result) => {
                const div = document.createElement("div");
                const checkBoxList = document.createElement("ul");
                checkBoxList.className = "item-collection";

                result.forEach(category => {
                    const li = document.createElement("li");
                    const checkBox = factory.generateCheckBox(category.name);
                    checkBox.setAttribute("value", category.name);
                    checkBox.classList.add("item");
                    li.appendChild(checkBox);
                    checkBoxList.appendChild(li);
                });

                div.appendChild(checkBoxList);

                const newCategBtn = factory.generateButton("btn waves-effect waves-light", "Add new Category", "newCategory");
                newCategBtn.addEventListener("click", postEventHandler.newCategGeneration);

                div.appendChild(newCategBtn);

                const categCard = factory.generateCard(titleCateg, div);
                const col2 = document.createElement("div");
                col2.className = "col s4";

                col2.appendChild(categCard);

                col.appendChild(cardPostForm);
                row.appendChild(col);
                row.appendChild(col2);

                container.appendChild(row);
                document.body.appendChild(container)
            })
    }

    clearField() {
        document.querySelector("#titleInput").value = ""
        document.querySelector("#postBodyInput").value = ""
        document.querySelector(".item-collection").childNodes.forEach((child) => {
            child.firstChild.childNodes[0].checked = false;
        })
    }

    generatePostPage(data) {
        const container = factory.generateContainer();

        data.forEach((post) => {
            const cardTitle = document.createElement("p");
            cardTitle.textContent = post.postTitle;

            const cardBody = document.createElement("div");
            const bodyText = document.createElement("div");

            bodyText.textContent = post.postBody;
            cardBody.appendChild(bodyText);

            const categList = factory.generateDivRow();
            post.categories.forEach((category) => {
                const p = document.createElement("h6");
                p.className = "col";
                p.style.border = "solid 1px black";
                p.style.fontSize = "10px";
                p.style.padding = "5px";
                p.style.marginRight = "5px";
                p.style.borderRadius = "15%";
                p.textContent = category;
                categList.appendChild(p);
            })

            cardBody.appendChild(categList);
            container.appendChild(factory.generateCard(cardTitle, cardBody));
        })

        document.body.appendChild(container);
    }
}

export const postUi = new PostUi()