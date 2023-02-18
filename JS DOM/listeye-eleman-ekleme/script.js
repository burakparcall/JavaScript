let gorevListesi = [
];


function displayTasks() {
    const ul = document.querySelector('#task-list')
    ul.innerHTML = "";

    for (let gorev of gorevListesi) {
        let li = `
        <li class="task list-group-item">
            <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${gorev.id}" />
            <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
            </div>
        </li>
        `
        ul.insertAdjacentHTML("beforeend", li);
    }
}
displayTasks()

document.querySelector('#btnAddNewTask').addEventListener('click',btnAdd);
document.querySelector('#btnAddNewTask').addEventListener('keypress',btnAdd);

function btnAdd(event) {
    const textInput = document.querySelector('#txtTaskName');
    if (textInput.value == '') {
        alert('Görev giriniz')
    } else {
        gorevListesi.push(
            {"id": gorevListesi.length + 1, "gorevAdi": textInput.value}
        )
        displayTasks()
        textInput.value = '';
    }
    

    event.preventDefault()
}