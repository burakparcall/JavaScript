let gorevListesi = [
    {"id": 1, "gorevAdi": "Görev 1", "durum": "completed"},
    {"id": 2, "gorevAdi": "Görev 2", "durum": "pending"},
    {"id": 3, "gorevAdi": "Görev 3", "durum": "completed"},
    {"id": 4, "gorevAdi": "Görev 4", "durum": "pending"},
]

let editId;
let isEditTask = false;
const taskInput = document.querySelector("#txtTaskName")
const btnClear = document.querySelector("#btnClearTask");


function displayTasks() {
    let ul = document.querySelector("#task-list");
    ul.innerHTML= "";

    if (gorevListesi == 0) {
        ul.innerHTML = "<p class='p-3 m-0'>Görev listeniz boş</p>"
    } else {
        
        for (let gorev of gorevListesi) {
            let completed = gorev.durum == "completed" ? "checked" : "";

            let li = `
                <li class="task list-group-item">
                    <div class="form-check">
                        <input onclick="updateStatus(this)" type="checkbox" class="form-check-input" ${completed} id="${gorev.id}"/>
                        <label  for="${gorev.id}" class="form-check-label ${completed}" id="tsk"  >${gorev.gorevAdi}</label>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu">
                        <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                        <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
                        </ul>
                    </div>
                </li>
            `
            ul.insertAdjacentHTML("beforeend", li);
        }        
    }
}
displayTasks()

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document.querySelector("#btnAddNewTask").addEventListener("keypress", function() {
    if (event.key == "Enter") {
        document.querySelector("#btnAddNewTask").click();
    }   

})

function newTask() {

    if (taskInput.value == "") {
        alert("Görev Giriniz")
    } else {
        if(!isEditTask) {
            // ekleme
            gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi": taskInput.value });
        } else {
            //güncelleme
            for (let gorev of gorevListesi) {
                if(gorev.id == editId) {
                    gorev.gorevAdi = taskInput.value;
                }
                isEditTask = false;
            }
        }
        taskInput.value = "";
        displayTasks()
    }
    event.preventDefault();
}

function deleteTask(id) {
    let deletedId;
    for (let index in gorevListesi) {
        if (gorevListesi[index].id == id) {
            deletedId = index;
        }
    }

    gorevListesi.splice(deletedId, 1);
    displayTasks();
}

function editTask(taskId, taskName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = taskName;
    taskInput.focus();
    taskInput.classList.add("active");
}

btnClear.addEventListener("click", function(){
    gorevListesi.splice(0, gorevListesi.length);
    displayTasks()
})

function updateStatus(selectedTask) {
    // console.log(selectedTask.parentElement.lastElemenChild);

    let label = selectedTask.nextElementSibling;

    if(selectedTask.checked) {
        label.classList.add("checked");
        durum = "compeleted";
    } else {
        label.classList.remove("checked");
        durum = "pending"
    }

    for (let gorev of gorevListesi) {
        if(gorev.id == selectedTask.id) {
            gorev.durum = durum;
        }
    }

    console.log(gorevListesi);

}