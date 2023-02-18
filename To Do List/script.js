const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTask.addEventListener("click", function(){
    const task = taskInput.value;
    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function(){
        taskList.removeChild(li)
    })
    li.appendChild(deleteButton);

    const compeletedButton = document.createElement("button");
    compeletedButton.textContent = "Compeleted";

    compeletedButton.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
    })
    li.appendChild(compeletedButton);

    taskList.appendChild(li);
    taskInput.value = "";
})
