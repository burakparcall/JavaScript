let sonuc;

let ul = document.getElementById("task-list"); 

let count = ul.children.length;


let gorevListesi = [
    {"id": 1, gorevAdi: "Görev 1"},
    {"id": 2, gorevAdi: "Görev 2"},
    {"id": 3, gorevAdi: "Görev 3"},
    {"id": 4, gorevAdi: "Görev 4"},
    {"id": 5, gorevAdi: "Görev 5"},
]

for ( let gorev of gorevListesi) {
    let li = `  
    <li class="task list-group-item">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${gorev.id}" />
            <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
        </div>
    </li>
    `
    ul.insertAdjacentHTML("beforeend",li);
}

const btnAdd = document.querySelector('#btnAddNewTask');
const btnClean = document.querySelector('#btnClearTask');

// btnAdd.addEventListener('click', function(){
//     console.log('butona tıklandı')
// })

btnAdd.addEventListener('click', addTask);

function addTask(event) {
    console.log('1.butona tıklandı');

    event.preventDefault();
}

btnClean.addEventListener('click',cleanTask);

function cleanTask(event) {
    console.log('2.butona tıklandı');

    event.preventDefault();
}