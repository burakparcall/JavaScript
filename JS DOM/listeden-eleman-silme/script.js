let gorevListesi = [
    {"id": 1, "gorevAdi": "Görev 1"},
    {"id": 2, "gorevAdi": "Görev 2"},
    {"id": 3, "gorevAdi": "Görev 3"},
    {"id": 4, "gorevAdi": "Görev 4"},
    
]


function displayTasks() {
    let ul = document.querySelector("#task-list");
    ul.innerHTML= "";
    for (let gorev of gorevListesi) {
        let li = `
            <li class="task list-group-item">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="${gorev.id}" />
                    <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
                </div>
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <ul class="dropdown-menu">
                    <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Update</a></li>
                    </ul>
                </div>
            </li>
        `
        ul.insertAdjacentHTML("beforeend", li);
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

    let textInput = document.querySelector("#txtTaskName")

    if (textInput.value == "") {
        alert("Görev Giriniz")
    } else {
        gorevListesi.push(
            {"id": gorevListesi.length + 1, "gorevAdi": textInput.value },
        )
        textInput.value = "";
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

    // deletedId = gorevListesi.findIndex(function(gorev) {
    //     return gorev.id == id
    // })

    // deletedId = gorevListesi.findIndex(gorev => gorev.id == id)

    gorevListesi.splice(deletedId, 1);
    displayTasks();
}