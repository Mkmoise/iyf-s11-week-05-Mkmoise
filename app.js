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

    let li = document.createElement("li");

    li.textContent = input.value;

    todoList.appendChild(li);

    count++;

    itemsLeft.textContent = count + " items left";

    input.value = "";

});
