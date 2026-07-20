const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");

let count = 0;

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (input.value == "") {
        alert("Please enter a task.");
        return;
    }

    alert("The Add button is working!");

    let li = document.createElement("li");

li.textContent = input.value + " ";

let deleteButton = document.createElement("button");

deleteButton.textContent = "Delete";

li.appendChild(deleteButton);

todoList.appendChild(li);
    
    count++;

    itemsLeft.textContent = count + " items left";

    input.value = "";

});

/*todoList.addEventListener("click", function(event) {

    if (event.target.tagName == "BUTTON") {

        event.target.parentElement.remove();

        count--;

        itemsLeft.textContent = count + " items left";

    }

});*/
todoList.addEventListener("click", function(event) {

    if (event.target.tagName == "LI") {

        event.target.classList.toggle("completed");

    }

    if (event.target.tagName == "BUTTON") {

        event.target.parentElement.remove();

        count--;

        itemsLeft.textContent = count + " items left";

    }

});
