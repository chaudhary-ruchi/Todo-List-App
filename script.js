let tasks = [];

let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");

let list = document.getElementById("taskList");

function showTasks() {
    list.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");

        li.textContent = task + " ";
        let deleteBtn = document.createElement("button");
        
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            showTasks();
        });

        list.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

button.addEventListener("click", function() {
    let newTask = input.value.trim();

    if(newTask === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(newTask);
    showTasks();
    input.value = "";
});