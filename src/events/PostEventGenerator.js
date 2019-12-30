import { mainUI } from "../models/main";
import { http } from "../service/http";
import { baseUrl } from "../app";
import { factory } from "../models/genericComponent";
import { lclStorage } from "../service/localStorage";
import { postUi } from "../models/post";

class PostEventGenerator {

    newPost(e) {
        e.preventDefault();

        const data = {
            postTitle: document.querySelector('#titleInput').value,
            postBody: document.querySelector('#postBodyInput').value,
            userId: lclStorage.getLoggedUser().id
        }

        if (data.postTitle === "" || data.postBody === "") {
            mainUI.showAlert("Please insert the post content to procced!", "red lighten-2");
            return
        }

        const categories = document.querySelectorAll('.item');
        let selectedItems = [];
        categories.forEach((child)=>{
            if(child.childNodes[0].checked){
                selectedItems.push(child.textContent);
            }
        })

        data.categories = selectedItems;
        http.post(baseUrl + "post", data);
        postUi.clearField();
    }

    newCategGeneration(e) {
        e.preventDefault();

        e.target.textContent = "Add Category";
        const inputField = factory.generateInputText("categoryInput", "Insert new Category", "text");

        e.target.parentElement.insertBefore(inputField, e.target);

        e.target.addEventListener("click", postEventHandler.addNewCategory);
        e.target.removeEventListener("click", postEventHandler.newCategGeneration)
    }

    addNewCategory(e) {
        e.preventDefault();

        const data = {
            name: document.querySelector('#categoryInput').value
        };
        if (data.name === "") {
            const alert = factory.generateAlert("Please Insert a category", "red lighten-2");
            e.target.parentElement.insertBefore(alert, e.target.previousElementSibling);
            setTimeout(() => {
                alert.remove();
            }, 3000);

            return;
        }

        http.post(baseUrl + "category", data).then((result)=>{
            const li = document.createElement("li");
            const checkBox = factory.generateCheckBox(result.name);
            checkBox.classList.add("item");
            checkBox.setAttribute("value",result.name);
            li.appendChild(checkBox);
            document.querySelector(".item-collection").appendChild(li);

            e.target.previousElementSibling.remove();
            e.target.textContent = "Add New Category";
            e.target.addEventListener("click", postEventHandler.newCategGeneration);
            e.target.removeEventListener("click", postEventHandler.addNewCategory);   
        });
    }
}

export const postEventHandler = new PostEventGenerator();